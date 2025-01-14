import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";

export const sanityFetchData = async (query: string) => {
  return await client.fetch<SanityDocument[]>(query, {});
};

export const getIndexPageData = async (indexSlug: string) => {
  const INDEX_QUERY = `*[ _type == "${indexSlug}"] {_id, title, clientName, slug, image}`;

  const catData = await sanityFetchData(INDEX_QUERY);

  return catData.map((catDataItem: SanityDocument) => ({
    id: catDataItem._id,
    title: catDataItem.clientName ? catDataItem.clientName : catDataItem.title,
    image: sanityUrlFor(catDataItem.image.image)?.url() || "",
    alt: catDataItem.image.alt,
    link: `${indexSlug}/${catDataItem.slug.current}`,
  }));
};

export const getCarouselDataAll = async (limit?: number) => {
  const PROJECTS_QUERY = `*[
    _type == "project"
    && defined(slug.current)
  ]|order(publishedAt desc)${
    limit ? `[0...${limit}]` : ""
  }{_id, title, slug, location, imagesGallery[0], publishedAt}`;

  const catData = await sanityFetchData(PROJECTS_QUERY);

  return catData.map((catDataItem: SanityDocument) => ({
    id: catDataItem._id,
    title: catDataItem.title,
    location: catDataItem.location,
    image: sanityUrlFor(catDataItem.imagesGallery.image)?.url() || "",
    alt: catDataItem.imagesGallery.alt,
    link: catDataItem.slug.current,
  }));
};

export const getCarouselData = async (cats: string[], field: string) => {
  const CATS_QUERY = `*[_type == 'project' && (${cats
    .map((t: string) => `'${t.toLowerCase()}' in ${field}`)
    .join(
      " || "
    )})]|order(publishedAt desc)[0...12]{_id, title, location, imagesGallery[0], slug}`;

  const catData = await sanityFetchData(CATS_QUERY);

  return catData.map((catDataItem: SanityDocument) => ({
    id: catDataItem._id,
    title: catDataItem.title,
    location: catDataItem.location,
    image: sanityUrlFor(catDataItem.imagesGallery.image)?.url() || "",
    alt: catDataItem.imagesGallery.alt,
    link: catDataItem.slug.current,
  }));
};

export const sanityUrlFor = (source: SanityImageSource) => {
  const { projectId, dataset } = client.config();
  return projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
};

export const getJSONLD = (data?: any) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Macs Iron Works NY",
    location: {
      "@type": "Place",
      name: "Macs Iron Works NY",
      telephone: "(347) 835-6126",
      url: "https://macsironworksny.com",
      email: "MacsIronWorks@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "115 Old Rte 209",
        addressLocality: "Hurley",
        postalCode: "12433",
        addressRegion: "NY",
        addressCountry: "US",
        openingHours: "Mo,Tu,We,Th,Fr 09:00-17:00",
      },
    },
    image: [`/logos/miw-updated-logo-light.png`],
  };
  return jsonLd;
};
