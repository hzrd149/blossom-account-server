import { useState } from "react";
import { Icon, IconButton, IconButtonProps, useToast } from "@chakra-ui/react";
import { BiCheck, BiClipboard } from "react-icons/bi";

type CopyIconButtonProps = Omit<IconButtonProps, "icon" | "value"> & {
  value: string | undefined | (() => string);
  icon?: IconButtonProps["icon"];
};

export const CopyIconButton = ({ value, icon, ...props }: CopyIconButtonProps) => {
  const toast = useToast();
  const [copied, setCopied] = useState(false);

  return (
    <IconButton
      icon={copied ? <Icon as={BiCheck} boxSize="1.5em" /> : icon || <Icon as={BiClipboard} boxSize="1.2em" />}
      onClick={() => {
        const v: string | undefined = typeof value === "function" ? value() : value;

        if (v && navigator.clipboard && !copied) {
          navigator.clipboard.writeText(v);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } else toast({ description: v, isClosable: true, duration: null });
      }}
      {...props}
    />
  );
};
