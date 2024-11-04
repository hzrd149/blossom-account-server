export { router as default } from "./router.js";

// use await to import so order is preserved
await import("./upload.js");
await import("./account.js");
await import("./list.js");
await import("./delete.js");
await import("./has.js");
await import("./fetch.js");
