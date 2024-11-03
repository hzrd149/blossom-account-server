import { CommonState, getBlobDescriptor, router } from "./router.js";
import { metadata } from "../database/db.js";

router.get<CommonState>("/list/:pubkey", async (ctx) => {
  const { pubkey } = ctx.params;
  const query = ctx.query;

  const since = query.since ? parseInt(query.since as string) : undefined;
  const until = query.until ? parseInt(query.until as string) : undefined;

  // check auth
  if (!ctx.state.auth) return ctx.throw(401, "Missing Auth event");
  if (ctx.state.authType !== "list") return ctx.throw(400, "Incorrect Auth type");
  if (ctx.state.auth.pubkey !== pubkey) return ctx.throw(403, "Cant list other pubkeys blobs");

  const blobs = await metadata.getOwnerBlobs(pubkey, { since, until });

  ctx.status = 200;
  ctx.body = blobs.map((blob) => getBlobDescriptor(blob, ctx.request));
});
