import { useEffect } from "react";
import {
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
  Text,
} from "@chakra-ui/react";
import { decodePaymentRequest } from "@cashu/cashu-ts";

import QrCode from "./qrcode";
import { CopyIconButton } from "./copy-icon-button";

export default function CashuPaymentModal({ payment, ...props }: Omit<ModalProps, "children"> & { payment: string }) {
  useEffect(() => {
    console.log(decodePaymentRequest(payment));
  }, [payment]);

  return (
    <Modal {...props}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader p="4">Cashu payments</ModalHeader>
        <ModalCloseButton />
        <ModalBody px="4" py="0">
          <Text fontStyle="italic">Scan this with any cashu wallet that supports payment requests</Text>
          <Link href={"cashu:" + payment} isExternal>
            <QrCode value={payment} />
          </Link>
          <Flex gap="2">
            <Input userSelect="all" defaultValue={payment} />
            <CopyIconButton value={payment} aria-label="Copy payment request" />
          </Flex>
        </ModalBody>

        <ModalFooter p="4">
          <Button colorScheme="blue" onClick={props.onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
