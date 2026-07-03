import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

// This replaces the old site's blanket "noindex, nofollow" — Nutra-4 should
// be fully discoverable on Google now.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
