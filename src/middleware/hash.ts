import { Middleware } from "koa";

export type HashState = {
  hash: string;
};

export default function requireHash(): Middleware<HashState> {
  return (ctx, next) => {
    const { hash } = ctx.params;
    if (!hash) return ctx.throw(400, "Missing hash");
    const match = hash.match(/[0-9a-f]{64}/i);
    if (!match[0]) throw new Error("Invalid hash");
    ctx.state.hash = match[0];

    return next();
  };
}
