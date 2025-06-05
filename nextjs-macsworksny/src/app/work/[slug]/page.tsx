import type { Metadata } from "next";
import { SanityDocument } from "next-sanity";
import { ImageGallery } from "@/components/UI/imageGallery/ImageGallery";
import { WorkBody } from "@/components/pages/work/WorkBody";
import {
  sanityFetchData,
  sanityUrlFor,
  getCarouselData,
  getJSONLDProject,
  getSEOMetaData,
} from "@/sanity/helpers";
import { Carousel } from "@/components/UI/carousel/Carousel";
import { MWHeading } from "@/components/UI/MWHeading";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const CLIENT_QUERY = `*[_type == "project" && slug.current == "${slug}"]`;
  return getSEOMetaData(CLIENT_QUERY);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const PROJET_QUERY = `*[_type == "project" && slug.current == "${slug}"]`;

  const projectData = await sanityFetchData(PROJET_QUERY);

  const imageGallery = projectData[0].imagesGallery.map(
    (image: SanityDocument) => {
      return {
        id: image._key,
        image: sanityUrlFor(image.image.asset)?.url() || "",
        alt: image.alt,
      };
    }
  );

  const {
    _id,
    title,
    subheading,
    features,
    locationCity,
    locationState,
    bodyTitle1,
    bodyTitle2,
    body1,
    body2,
  } = projectData[0];

  const catTitle =
    projectData[0].category.length > 1
      ? projectData[0].category[0] + " & " + projectData[0].category[1]
      : projectData[0].category[0];

  const catProjectData = await getCarouselData(
    projectData[0].category,
    "category",
    _id
  );

  const json = getJSONLDProject(
    title,
    body1[0].children[0].text,
    locationCity,
    locationState,
    imageGallery[0].image
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
      <MWHeading
        component="h3"
        fontSize="1.875rem"
        color="white"
        fontWeight={400}
        text={subheading}
        styleProps={{ pt: 3 }}
      />
      <MWHeading component="h1" fontSize="4rem" color="mwOrange" text={title} />
      <ImageGallery images={imageGallery} />
      <WorkBody
        features={features}
        location={locationCity + ", " + locationState}
        title1={bodyTitle1}
        body1={body1}
        title2={bodyTitle2}
        body2={body2}
      />
      <Carousel
        sectionTitle={`More ${catTitle} Work`}
        slidesData={catProjectData}
      />
    </>
  );
}
