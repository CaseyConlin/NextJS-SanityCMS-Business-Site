// import type { Metadata } from "next";
import { SanityDocument } from "next-sanity";
// import { client } from "@/sanity/client";
import { ImageGallery } from "@/components/UI/imageGallery/ImageGallery";
import { WorkBody } from "@/components/pages/work/WorkBody";
import {
  sanityFetchData,
  sanityUrlFor,
  getCarouselData,
} from "@/sanity/helpers";
import { Carousel } from "@/components/UI/carousel/Carousel";

import { ContactFooter } from "@/components/UI/ContactFooter";
import { MWHeading } from "@/components/UI/MWHeading";
// const items = [
//   "Poughkeepise",
//   "New York",
//   "Brooklyn",
//   "Manhattan",
//   "Queens",
//   "Bronx",
//   "Staten Island",
// ];

// export async function generateStaticParams() {
//     return albums.map((album: albumType) => ({
//       slug: album.slug,
//     }));
//   }

//   export async function generateMetadata({
//     params,
//   }: {
//     params: { slug: string };
//   }): Promise<Metadata> {
//     // read route params
//     const id = params.slug;

//     const albumData = albums.find((album) => {
//       return album.slug == id;
//     });

//     // optionally access and extend (rather than replace) parent metadata
//     // const previousImages = (await parent).openGraph?.images || []

//     return {
//       title: albumData?.title,
//       description: albumData?.metaDescription,
//       // openGraph: {
//       //   images: ['/some-specific-page-image.jpg', ...previousImages],
//       // },
//     };
//   }

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  console.log(slug);
  const PROJET_QUERY = `*[_type == "project" && slug.current == "/work/${slug}"]`;

  const projectData = await sanityFetchData(PROJET_QUERY);

  // const CATS_QUERY = `*[_type == 'project' && (${projectData[0].category
  //   .map((t: string) => `'${t}' in category`)
  //   .join(" || ")})]`;

  // const catData = await sanityFetchData(CATS_QUERY);

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
    title,
    subheading,
    features,
    location,
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
    "category"
  );

  return (
    <>
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
        location={location}
        title1={bodyTitle1}
        body1={body1}
        title2={bodyTitle2}
        body2={body2}
      />
      <Carousel
        sectionTitle={`More ${catTitle} Work`}
        slidesData={catProjectData}
      />
      <ContactFooter />
    </>
  );
}
