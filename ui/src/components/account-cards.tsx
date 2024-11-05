import { Box, Grid, Text, Heading, useColorModeValue, Button, ButtonGroup, useDisclosure } from "@chakra-ui/react";

import { Account } from "../views/account";
import CashuPaymentModal from "./cashu-payment-card";
import LightningPaymentModal from "./lightning-payment-modal";

const AccountCard = ({ account, onTopup }: { account: Account; onTopup?: () => void }) => {
  const cashu = useDisclosure();
  const lightning = useDisclosure();

  return (
    <Box rounded="lg" shadow="md" p={6} textAlign="center" display="flex" gap="2" flexDirection="column">
      <Heading size="md">{account.name}</Heading>

      <Text>{account.description}</Text>
      <Text fontWeight="bold">Balance: {account.balance} sats</Text>
      <Text>Rate: {account.rate}</Text>

      <ButtonGroup>
        <Button w="full" colorScheme="purple" onClick={cashu.onOpen}>
          Cashu
        </Button>
        <Button w="full" colorScheme="yellow" onClick={lightning.onOpen}>
          Lightning
        </Button>
      </ButtonGroup>

      {cashu.isOpen && <CashuPaymentModal payment={account.payment} isOpen={cashu.isOpen} onClose={cashu.onClose} />}
      {lightning.isOpen && (
        <LightningPaymentModal
          payment={account.payment}
          isOpen={lightning.isOpen}
          onClose={lightning.onClose}
          onComplete={onTopup}
        />
      )}
    </Box>
  );
};

const AccountCards = ({ accounts, onTopup }: { accounts: Account[]; onTopup?: () => void }) => {
  if (!accounts) {
    return (
      <Box height="16rem" display="flex" alignItems="center" justifyContent="center">
        <Text color={useColorModeValue("gray.600", "gray.400")}>Loading...</Text>
      </Box>
    );
  }

  return (
    <Grid
      w="full"
      templateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={6}
    >
      {accounts.map((account) => (
        <AccountCard key={account.name} account={account} onTopup={onTopup} />
      ))}
    </Grid>
  );
};

export default AccountCards;
