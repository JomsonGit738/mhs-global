// Centralised environment config for client-side builds

export const PROD_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxq_dU8AL8Q3vfKxyhKQep-0G7ypGxEdWpPCqTuGvL2AUCmUlX8gLAG_rEeJjk5hGFE/exec";

export const DEV_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby9lM1TjcaWNXXV2i0mrhGjhIGj0K7H_ElQQGYtiNhRq3eXfiQrOzcttZG7HXn0nnGA/exec";

export function resolveScriptUrl(): string {
  const fromEnv = (
    process.env.REACT_APP_SCRIPT_URL as string | undefined
  )?.trim();
  if (fromEnv) return fromEnv;

  // Runtime heuristics when no env var is provided
  const isBrowser =
    typeof window !== "undefined" && typeof window.location !== "undefined";
  const host = isBrowser ? window.location.hostname : "";
  const isLocalhost =
    host === "localhost" || host === "127.0.0.1" || host.endsWith(".local");

  // Treat Netlify preview/branch deploys as "dev"
  const isNetlifyPreview = host.endsWith("netlify");

  if (isLocalhost || isNetlifyPreview) return DEV_SCRIPT_URL;

  // Build-time fallback by NODE_ENV
  return process.env.NODE_ENV === "production"
    ? PROD_SCRIPT_URL
    : DEV_SCRIPT_URL;
}

export const SCRIPT_URL = resolveScriptUrl();
