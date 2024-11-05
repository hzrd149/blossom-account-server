import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";

import "window.nostr.js";
import "./index.css";
import App from "./App";

import { ErrorBoundary } from "./components/error-boundary";

createRoot(document.getElementById("root")!).render(
  <ChakraProvider>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </ChakraProvider>,
);
