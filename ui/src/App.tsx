import { useState } from "react";
import UploadPage from "./views/upload.js";
import { useEventListener } from "@chakra-ui/react";
import AccountPage from "./views/account.js";

function App() {
  const [page, setPage] = useState(location.hash.slice(1));
  useEventListener(window, "hashchange", () => {
    setPage(location.hash.slice(1));
  });

  switch (page) {
    case "account":
      return <AccountPage />;
    default:
      return <UploadPage />;
  }
}

export default App;
