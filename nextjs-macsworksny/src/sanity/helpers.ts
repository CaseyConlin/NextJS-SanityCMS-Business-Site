import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";

export const sanityFetchData = async (query: string) => {
  return await client.fetch<SanityDocument[]>(query, {});
};

// const PROJECTS_QUERY = `*[
//   _type == "project"
//   && defined(slug.current)
// ]|order(publishedAt desc)[0...12]{_id, title, slug, location, imagesGallery[0], publishedAt}`;

export const getCarouselDataAll = async (limit?: number) => {
  const PROJECTS_QUERY = `*[
    _type == "project"
    && defined(slug.current)
  ]|order(publishedAt desc)${
    limit ? `[0...${limit}]` : ""
  }{_id, title, slug, location, imagesGallery[0], publishedAt}`;

  console.log(PROJECTS_QUERY);
  // const PROJECTS_QUERY = `*[
  //   _type == "project"
  //   && defined(slug.current)
  // ]|order(publishedAt desc)${
  //   limit ? `[0...${limit}]` : ""
  // }{_id, title, slug, location, imagesGallery[0], publishedAt}`;
  const catData = await sanityFetchData(PROJECTS_QUERY);
  console.log("cd", catData);
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
    )})]|order(publishedAt desc)[0...12]{_id, title, location, imagesGallery[0], link}`;

  const catData = await sanityFetchData(CATS_QUERY);

  return catData.map((catDataItem: SanityDocument) => ({
    id: catDataItem._id,
    title: catDataItem.title,
    location: catDataItem.location,
    image: sanityUrlFor(catDataItem.imagesGallery.image)?.url() || "",
    alt: catDataItem.imagesGallery.alt,
    link: catDataItem.slug,
  }));
};

export const sanityUrlFor = (source: SanityImageSource) => {
  const { projectId, dataset } = client.config();
  return projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;
};
