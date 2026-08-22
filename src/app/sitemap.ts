import type { MetadataRoute } from "next";
import { schemes } from "@/lib/schemes-data";

const SITE_URL = "https://goi-schemes-finder.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/schemes", "/questionnaire"].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const schemeRoutes = schemes.map((scheme) => ({
    url: `${SITE_URL}/schemes/${scheme.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...schemeRoutes];
}
