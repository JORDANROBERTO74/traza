const FALLBACK_URL = "https://traza-woad.vercel.app";

function resolveSiteUrl(): string {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return (value && value.length > 0 ? value : FALLBACK_URL).replace(/\/+$/, "");
}

export const site = {
  name: "Traza",
  domain: "trazabuild.com",
  email: "hello@trazabuild.com",
  phone: "+1 (512) 555-0148",
  url: resolveSiteUrl(),
} as const;
