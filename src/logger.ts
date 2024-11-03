import debug from "debug";

if (!process.env.DEBUG) debug.enable("blossom, blossom:*");

const logger = debug("blossom");

export default logger;
