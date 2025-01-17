import { Middleware } from "koa";
import fs from "node:fs";
import pfs from "node:fs/promises";
import * as path from "node:path";
import * as os from "node:os";
import * as crypto from "node:crypto";

/** Extended Koa context state including temp file path */
export type TempFileState = {
  uploadPath?: string;
  uploadSize?: number;
};

/**
 * Creates a middleware that writes ctx.body to a temp file and cleans up afterward
 * @param options Configuration options for the middleware
 * @returns Koa middleware function
 */
function uploadMiddleware(): Middleware<TempFileState> {
  const tempDir = os.tmpdir();
  const prefix = "blossom-temp";

  return async function uploadFile(ctx, next): Promise<void> {
    // Store original body
    let uploadPath: string | null = null;

    if (ctx.method === "POST" || ctx.method === "PUT") {
      try {
        // Generate unique temp file name
        const randomString = crypto.randomBytes(16).toString("hex");
        uploadPath = path.join(tempDir, `${prefix}-${randomString}`);

        // write upload to path
        let size = 0;
        const stream = ctx.req.pipe(fs.createWriteStream(uploadPath!));
        ctx.req.on("data", (chunk: Uint8Array) => {
          size += chunk.length;
        });

        // wait for write to end
        await new Promise<void>((res, rej) => {
          ctx.req.on("end", () => res());
          ctx.req.on("error", (err) => rej(err));
        });

        // Store temp file path in context state
        ctx.state.uploadPath = uploadPath;
        ctx.state.uploadSize = size;

        // Setup cleanup function
        const cleanup = async (): Promise<void> => {
          if (uploadPath) {
            try {
              await pfs.unlink(uploadPath);
              console.log(`Cleaned up temp file: ${uploadPath}`);
            } catch (err) {}
          }
        };

        // Clean up on request finish
        ctx.res.on("finish", cleanup);
        ctx.res.on("close", cleanup);
        ctx.res.on("error", cleanup);
      } catch (error) {
        // Try to clean up if there was an error
        if (uploadPath) {
          try {
            await pfs.unlink(uploadPath);
          } catch (error) {}
        }
        throw error;
      }
    }

    await next();
  };
}

export default uploadMiddleware;
