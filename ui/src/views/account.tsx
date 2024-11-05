import { useEffect, useState } from "react";
import { Box, Button, Container, Flex, Heading, Spinner, Text, useToast } from "@chakra-ui/react";

import { newExpirationValue, unixNow } from "../helpers/date";
import AccountCards from "../components/account-cards";
import { SERVER } from "../env";

export type Account = {
  name: string;
  description: string;
  rate: string;
  balance: number;
  payment: string;
};

export default function AccountPage() {
  const toast = useToast();
  const [accounts, setAccounts] = useState<Account[]>();
  const [loading, setLoading] = useState(false);

  const refresh = async () => {
    try {
      setLoading(true);
      if (!window.nostr) throw new Error("Missing extension");
      const auth = await window.nostr.signEvent({
        kind: 24242,
        content: "Check account",
        tags: [
          ["t", "account"],
          ["expiration", newExpirationValue()],
        ],
        created_at: unixNow(),
      });

      const authorization = "Nostr " + btoa(JSON.stringify(auth));
      const res = await fetch(new URL("/account", SERVER), { headers: { authorization } });

      if (!res.ok) throw new Error(res.headers.get("x-reason") || "Failed to get account details");

      setAccounts(await res.json());
    } catch (error) {
      if (error instanceof Error) toast({ status: "error", description: error.message });
    }
    setLoading(false);
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <>
      <Container maxW="6xl" display="flex" gap="4" flexDirection="column" alignItems="center" py="10">
        <Heading>Account</Heading>
        {loading ? (
          <Box h="40" display="flex" alignItems="center" justifyContent="center" gap="2">
            <Spinner />
            <Text fontSize="lg">Loading...</Text>
          </Box>
        ) : accounts ? (
          <AccountCards accounts={accounts} onTopup={refresh} />
        ) : (
          <Flex justifyContent="center" alignItems="center" h="40">
            <Button onClick={refresh} colorScheme="purple">
              Login with nostr
            </Button>
          </Flex>
        )}
        <Button as="a" href="#" variant="ghost" maxW="sm" w="full">
          Back
        </Button>
      </Container>
    </>
  );
}
