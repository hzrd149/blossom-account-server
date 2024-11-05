import { Box, useColorModeValue } from "@chakra-ui/react";
import QrCreator from "qr-creator";
import { useEffect, useRef } from "react";

export default function QrCode({ value }: { value: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fill = useColorModeValue("#1A202C", "#FFFFFF");
  const background = useColorModeValue("#FFFFFF", "#1A202C");

  useEffect(() => {
    if (canvasRef.current) {
      QrCreator.render(
        {
          text: value,
          ecLevel: "H",
          fill,
          background,
          size: 400,
          quiet: 2,
        },
        canvasRef.current,
      );
    }
  }, [value, fill, background]);

  return <Box as="canvas" ref={canvasRef} w="full" />;
}
