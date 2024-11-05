import { FormEventHandler, useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Flex,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";
import {
  CashuMint,
  CashuWallet,
  decodePaymentRequest,
  MintQuoteResponse,
  MintQuoteState,
  PaymentRequest,
  PaymentRequestPayload,
  PaymentRequestTransportType,
} from "@cashu/cashu-ts";

import QrCode from "./qrcode";
import { CopyIconButton } from "./copy-icon-button";

async function createQuoteForPaymentRequest(request: PaymentRequest, amount?: number) {
  const mints = request.mints;
  if (!mints || mints.length === 0) throw new Error("Missing mints");

  const mint = new CashuMint(mints[0]);
  const wallet = new CashuWallet(mint, { unit: request.unit });

  const a = amount || request.amount;
  if (!a) throw new Error("Missing amount");
  const quote = await wallet.createMintQuote(a);
  return { quote, mint, wallet };
}

export default function LightningPaymentModal({
  payment,
  onClose,
  onComplete,
  ...props
}: Omit<ModalProps, "children"> & { payment: string; onComplete?: () => void }) {
  const toast = useToast();
  const [amount, setAmount] = useState<number>();
  const [quote, setQuote] = useState<MintQuoteResponse>();
  const [wallet, setWallet] = useState<CashuWallet>();

  const request = useMemo(() => decodePaymentRequest(payment), [payment]);
  const transport = useMemo(() => request.getTransport(PaymentRequestTransportType.POST), [request]);
  const [status, setStatus] = useState("");

  // set default amount
  useEffect(() => {
    if (request.amount) setAmount(request.amount);
  }, [request]);

  // create quote
  useEffect(() => {
    if (!amount) return;

    createQuoteForPaymentRequest(request, amount).then(({ quote, wallet }) => {
      setQuote(quote);
      setWallet(wallet);
    });
  }, [request, amount]);

  // check for invoice paid
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    const check = async () => {
      if (!quote || !wallet || !amount || !transport) return;

      try {
        setStatus("Checking...");
        const { state } = await wallet.checkMintQuote(quote.quote);

        if (state === MintQuoteState.PAID) {
          setStatus("Minting tokens...");
          const { proofs } = await wallet.mintProofs(amount, quote.quote);

          const payload: PaymentRequestPayload = {
            id: request.id,
            proofs,
            unit: wallet.unit,
            mint: wallet.mint.mintUrl,
          };

          setStatus("Sending tokens...");
          const res = await fetch(transport.target, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          if (!res.ok) throw new Error("Request failed");

          setStatus("Sent");
          // close modal
          onClose();
          onComplete?.();
        } else {
          setStatus("");
          timeout = setTimeout(check, 5000);
        }
      } catch (error) {
        setStatus("Error!");
        if (error instanceof Error) toast({ status: "error", description: error.message });
        timeout = setTimeout(check, 10000);
      }
    };

    check();

    return () => {
      timeout !== null && clearTimeout(timeout);
    };
  }, [quote, wallet]);

  const renderContent = () => {
    if (!amount) {
      const submit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();

        const amount = parseInt((e.currentTarget.elements.namedItem("amount") as HTMLInputElement).value);
        setAmount(amount);
      };

      return (
        // @ts-expect-error
        <Flex direction="row" gap="2" as="form" onSubmit={submit}>
          <Input name="amount" min="1" step="1" isRequired autoFocus type="number" />
          <Button type="submit" colorScheme="green">
            Submit
          </Button>
        </Flex>
      );
    } else if (quote) {
      return (
        <>
          <Text fontStyle="italic">Scan this with any lightning wallet</Text>
          <Link href={"lightning:" + quote.request} isExternal>
            <QrCode value={quote.request} />
          </Link>
          <Flex gap="2">
            <Input userSelect="all" defaultValue={quote.request} />
            <CopyIconButton value={quote.request} aria-label="Copy payment request" />
          </Flex>
        </>
      );
    }

    return (
      <Box>
        <Spinner /> Loading...
      </Box>
    );
  };

  return (
    <Modal onClose={onClose} {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader p="4">Lightning payments</ModalHeader>
        <ModalCloseButton />
        <ModalBody px="4" py="0">
          {renderContent()}
        </ModalBody>

        <ModalFooter p="4" justifyContent="space-between" alignItems="center">
          {status && (
            <Box>
              <Spinner /> {status}
            </Box>
          )}
          <Button colorScheme="blue" onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
