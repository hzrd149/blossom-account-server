import { mkdirp } from "mkdirp";
import { LocalStorage, IBlobStorage } from "blossom-server-sdk/storage";

async function createStorage() {
  await mkdirp("data/blobs");
  return new LocalStorage("data/blobs");
}

const storage: IBlobStorage = await createStorage();
await storage.setup();

export default storage;
