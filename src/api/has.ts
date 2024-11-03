import { metadata } from "../database/db.js";
import requireHash from "../middleware/hash.js";
import { router } from "./router.js";

router.head("/:hash", requireHash(), async (ctx, next) => {
  const { hash } = ctx.state;
  if (await metadata.hasBlob(hash)) ctx.status = 200;
  else ctx.status = 404;
});
