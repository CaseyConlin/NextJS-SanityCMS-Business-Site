import type { Metadata } from "next";
import { type SanityDocument } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import {
  sanityFetchData,
  sanityUrlFor,
  getCarouselDataAll,
} from "@/sanity/helpers";
import { HomeExpandingHeader } from "@/components/UI/HomeExpandingHeader";
import { HomeAbout } from "@/components/pages/home/HomeAbout";
import { Carousel } from "../components/UI/carousel/Carousel";
import { getJSONLD } from "@/sanity/helpers";

const INDEX_QUERY = `*[_type == "indexPage"]`;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const indexMetadata = await client.fetch<SanityDocument>(INDEX_QUERY, {});
  return {
    title: indexMetadata[0].metaTitle,
    description: indexMetadata[0].metaDescription,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

export default async function IndexPage() {
  const indexData = await sanityFetchData(INDEX_QUERY);

  type HeroImage = {
    alt: string;
    title: string;
    image: {
      asset: SanityImageSource;
      alt: string;
    };
    _key: string;
    link: string;
  };

  const heroImagesData = indexData[0].heroImages.map((quarter: HeroImage) => {
    return {
      id: quarter._key,
      title: quarter.title,
      image: sanityUrlFor(quarter.image.asset)?.url() || "",
      alt: quarter.image.alt,
      link: quarter.link,
    };
  });

  const projectData = await getCarouselDataAll(15);
  const schemaData = getJSONLD();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <main>
        <HomeExpandingHeader quarters={heroImagesData} />
        <HomeAbout
          title={indexData[0].aboutTitle}
          text={indexData[0].aboutDescription}
          link={indexData[0].aboutLink}
        />
        <Carousel sectionTitle="Our Work" slidesData={projectData} />
      </main>
    </>
  );
}
