import { mkdirp } from "mkdirp";
import { type IBlobStorage } from "blossom-server-sdk";
import { LocalStorage } from "blossom-server-sdk/storage/local";

async function createStorage() {
  await mkdirp("data/blobs");
  return new LocalStorage("data/blobs");
}

const storage: IBlobStorage = await createStorage();
await storage.setup();

export default storage;
