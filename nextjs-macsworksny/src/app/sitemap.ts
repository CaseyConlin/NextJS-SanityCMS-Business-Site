import { MetadataRoute } from "next";
import type { SanityDocument } from "@sanity/client";
import { sanityFetchData } from "@/sanity/helpers";

const TYPES = ["project", "service", "client", "ourWork"];

const getQueryByType = (type: string) =>
  `*[_type == "${type}"] {slug, lastModified}`;

const getLinkWithSlug = (type: string, slug: string) => {
  let parentSlug = type;
  switch (type) {
    case "project":
      parentSlug = "work";
      break;
    case "ourWork":
      parentSlug = "our-work";
      break;
  }
  return `/${parentSlug}/${slug}`;
};
async function getDynamicPageData(types: string[]): Promise<SanityDocument[]> {
  const dynamicPages = [];
  for (const type of types) {
    const query = getQueryByType(type);
    const typeData = await sanityFetchData(query);
    for (const page of typeData) {
      page.sitemapSlug = getLinkWithSlug(type, page.slug.current);
    }
    dynamicPages.push(...typeData);
  }

  return dynamicPages;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.SITE_URL || "http:localhost:3000";
  const data = await getDynamicPageData(TYPES);

  const dynamicPages: MetadataRoute.Sitemap = data.map(
    (page: SanityDocument) => ({
      url: `${baseUrl}${page.sitemapSlug}`,
      lastModified: page.lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    })
  );

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...dynamicPages,
  ];
}
