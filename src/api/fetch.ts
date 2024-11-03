import { CommonState, router } from "./router.js";
import { metadata } from "../database/db.js";
import storage from "../storage/index.js";
import requireHash, { HashState } from "../middleware/hash.js";

router.get<CommonState & HashState>("/:hash", requireHash(), async (ctx) => {
  const { hash } = ctx.state;

  if (!(await metadata.hasBlob(hash)) || !(await storage.hasBlob(hash))) return ctx.throw(404, "Not found");

  const blob = await metadata.getBlob(hash);

  ctx.status = 200;
  if (blob.type) ctx.set("Content-Type", blob.type);
  ctx.body = await storage.readBlob(hash);
});
