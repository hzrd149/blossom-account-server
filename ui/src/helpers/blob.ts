export function readBlobAsArrayBuffer(file: File | Blob) {
  return new Promise<ArrayBuffer>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result;
      if (result == undefined || typeof result !== "object") {
        reject();
        return;
      }
      resolve(result);
    };
    reader.onerror = (error) => reject(error);
    reader.readAsArrayBuffer(file);
  });
}

export async function getFileSha256(file: File) {
  const { bytesToHex } = await import("@noble/hashes/utils");
  const buffer = file instanceof File ? await file.arrayBuffer() : await readBlobAsArrayBuffer(file);
  let hash;
  if (crypto.subtle) {
    const hashBuffer = await crypto.subtle.digest("SHA-256", buffer);
    hash = new Uint8Array(hashBuffer);
  } else {
    const { sha256 } = await import("@noble/hashes/sha256");
    hash = sha256.create().update(new Uint8Array(buffer)).digest();
  }
  return bytesToHex(hash);
}
