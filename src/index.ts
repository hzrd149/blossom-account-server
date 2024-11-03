#!/usr/bin/env node
import Koa, { HttpError } from "koa";
import serve from "koa-static";
import path from "node:path";
import cors from "@koa/cors";
import fs from "node:fs";
import { fileURLToPath } from "node:url";

import logger from "./logger.js";
import router from "./api/index.js";
import { isHttpError } from "./helpers/error.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = new Koa();

// set CORS headers
app.use(
  cors({
    origin: "*",
    allowMethods: "GET, PUT, HEAD, OPTION, DELETE",
    allowHeaders: "Authorization,*",
    exposeHeaders: "*",
  }),
);

// handle errors
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    if (isHttpError(err)) {
      ctx.status = err.status || 500;
      ctx.body = err.message;
      ctx.app.emit("error", err, ctx);
      ctx.set("X-Reason", err.status > 500 ? "Something went wrong" : err.message);
    } else {
      ctx.status = 500;
      ctx.body = "Something went wrong";
      console.log(err);
    }
  }
});

// serve public folder at root /
try {
  const www = path.resolve(process.cwd(), "public");
  fs.statSync(www);
  app.use(serve(www));
} catch (error) {
  const www = path.resolve(__dirname, "../public");
  app.use(serve(www));
}

app.use(router.routes()).use(router.allowedMethods());

// start server
app.listen(process.env.PORT || 3000);
logger("Started app on port", process.env.PORT || 3000);

async function shutdown() {
  logger("Saving database...");
  process.exit(0);
}

process.addListener("SIGTERM", shutdown);
process.addListener("SIGINT", shutdown);
