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
  }{_id, title, locationCity, locationState, imagesGallery[0], slug, publishedAt}`;

  const catData = await sanityFetchData(PROJECTS_QUERY);

  return catData.map((catDataItem: SanityDocument) => ({
    id: catDataItem._id,
    title: catDataItem.title,
    locationCity: catDataItem.locationCity,
    locationState: catDataItem.locationState,
    image: sanityUrlFor(catDataItem.imagesGallery.image)?.url() || "",
    alt: catDataItem.imagesGallery.alt,
    link: `work/${catDataItem.slug.current}`,
  }));
};

export const getCarouselData = async (
  cats: string[],
  field: string,
  id?: string
) => {
  const CATS_QUERY = `*[_type == 'project' && (${cats
    .map((t: string) => `'${t.toLowerCase()}' in ${field}`)
    .join(" || ")})]|order(publishedAt desc)[0...12]
    {_id, title, locationCity, locationState, imagesGallery[0], slug}`;

  const catData = await sanityFetchData(CATS_QUERY);

  return catData
    .map((catDataItem: SanityDocument) => ({
      id: catDataItem._id,
      title: catDataItem.title,
      locationCity: catDataItem.locationCity,
      locationState: catDataItem.locationState,
      image: sanityUrlFor(catDataItem.imagesGallery.image)?.url() || "",
      alt: catDataItem.imagesGallery.alt,
      link: `work/${catDataItem.slug.current}`,
    }))
    .filter((item: { id: string }) => item.id !== id);
};

export const sanityUrlFor = (source: SanityImageSource) => {
  const { projectId, dataset } = client.config();
  return projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
};

type OrgDetails = {
  name: string;
  openingHours: string;
  telephone: string;
  url: string;
  email: string;
  streetAddress: string;
  addressLocality: string;
  postalCode: string;
  addressRegion: string;
  seoServices: { type: string; serviceDetails: { description: string }[] }[];
  image: string;
};

export const getJSONLDOrg = ({
  name,
  openingHours,
  telephone,
  url,
  email,
  streetAddress,
  addressLocality,
  postalCode,
  addressRegion,
  seoServices,
  image,
}: OrgDetails) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name,
    openingHours,
    telephone,
    url,
    email,
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality,
      postalCode,
      addressRegion,
      addressCountry: "US",
    },
    services: seoServices.map((service) => ({
      type: service.type,
      details: service.serviceDetails.map((detail) => ({
        description: detail.description,
      })),
    })),

    image: [image],
  };
  return jsonLd;
};

export const getJSONLDProject = (
  name: string,
  description: string,
  locationCity: string,
  locationState: string,
  image: string
) => {
  const jsonLd = {
    "@context": "http://schema.org/",
    "@type": "Project",
    name,
    description,
    address: {
      "@type": "PostalAddress",
      addressLocality: locationCity,
      addressRegion: locationState,
      addressCountry: "US",
    },
    image,
  };
  return jsonLd;
};
