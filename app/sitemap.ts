import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return [
    "", "/courses", "/marketplace", "/certificates/verify", ...["structural-design-foundations","reinforced-concrete-beams","protastructure-workflow","autocad-structural-drawings","structural-drawing-review","column-and-foundation-design"].map(slug => `/courses/${slug}`)
  ].map(path => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: "weekly", priority: path === "" ? 1 : 0.7 }));
}
