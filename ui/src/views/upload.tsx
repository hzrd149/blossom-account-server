import { useState } from "react";
import { Button, Container, Flex, Heading, useToast } from "@chakra-ui/react";

import FilePicker from "../components/file-picker";
import FileCard from "../components/file-card";
import { getFileSha256 } from "../helpers/blob";
import { newExpirationValue, unixNow } from "../helpers/date";
import { SERVER } from "../env";

export default function UploadPage() {
  const toast = useToast();
  const [file, setFile] = useState<File>();
  const [status, setStatus] = useState<string>();

  const upload = async () => {
    try {
      if (!file) throw new Error("Select file first");
      if (!window.nostr) throw new Error("Missing signer extension");

      setStatus("Compute SHA256 hash...");
      const hash = await getFileSha256(file);

      setStatus("Signing...");

      // create auth event
      const auth = await window.nostr.signEvent({
        kind: 24242,
        content: "Authorize Upload",
        created_at: unixNow(),
        tags: [
          ["t", "upload"],
          ["x", hash],
          ["expiration", newExpirationValue()],
        ],
      });
      const authorization = "Nostr " + btoa(JSON.stringify(auth));

      // BUD-06 check upload
      setStatus("Checking Upload...");
      const check = await fetch(new URL("/upload", SERVER), {
        method: "HEAD",
        headers: {
          authorization,
          "X-Content-Type": file.type,
          "X-Content-Length": String(file.size),
          "X-Sha-256": hash,
        },
      });

      if (!check.ok) {
        throw new Error(check.headers.get("x-reason") || "Upload Rejected");
      }

      // Upload blob
      setStatus("Uploading...");
      const res = await fetch(new URL("/upload", SERVER), {
        method: "PUT",
        body: file,
        // attach Authorization: Nostr <base64> header to request
        headers: { authorization },
      });

      if (res.ok) {
        const body = await res.json();

        setFile(undefined);
        window.open(body.url, "_blank");
      } else {
        throw new Error(await res.text());
      }
    } catch (error) {
      if (error instanceof Error) toast({ status: "error", description: error.message });
    }

    setStatus("Upload");
  };

  return (
    <Container maxW="lg" display="flex" gap="4" flexDirection="column">
      <Heading textAlign="center" mt="10" mb="4">
        🌸 Blossom Server
      </Heading>
      {file ? <FileCard file={file} /> : <FilePicker onFileSelect={(files) => setFile(files[0])} />}
      <Flex px="4" direction="column" gap="2">
        <Button colorScheme="blue" w="full" onClick={upload} isLoading={!!status}>
          Upload
        </Button>
        <Button as="a" href="#account" variant="ghost">
          View Account
        </Button>
      </Flex>
    </Container>
  );
}
