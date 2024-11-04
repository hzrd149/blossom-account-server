import { RouterParamContext } from "@koa/router";
import { ParameterizedContext } from "koa";

export function getHashFromParams(ctx: ParameterizedContext & RouterParamContext) {
  let { hash } = ctx.params;
  if (!hash) return ctx.throw(400, "Missing hash");
  const match = hash.match(/[0-9a-f]{64}/i);
  if (!match) return ctx.throw(400, "Invalid hash");
  return match[0];
}

/**
 * Formats a file size in bytes to a human readable string
 * @param bytes - The size in bytes to format
 * @param decimals - Number of decimal places to show (default: 2)
 * @returns Formatted string (e.g., "1.5 MB")
 */
export function formatFileSize(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  // Find the appropriate unit by calculating log with base 1024
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  // Calculate the value in the appropriate unit
  const value = bytes / Math.pow(k, i);

  // Format the number with specified decimal places
  return `${parseFloat(value.toFixed(decimals))} ${sizes[i]}`;
}
