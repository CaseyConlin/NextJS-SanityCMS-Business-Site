import type { Metadata } from "next";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import {
  sanityFetchData,
  sanityUrlFor,
  getCarouselDataAll,
  getSEOMetaData,
} from "@/sanity/helpers";
import { HomeExpandingHeader } from "@/components/UI/HomeExpandingHeader";
import imagePlaceholder from "../../public/mw-logo-big-half-white-black-text.webp";
import { HomeAbout } from "@/components/pages/home/HomeAbout";
import { Carousel } from "../components/UI/carousel/Carousel";
import { getJSONLDOrg } from "@/sanity/helpers";
import mwLogo from "../../public/mw-logo-big-half-white-black-text.webp";

const INDEX_QUERY = `*[_type == "indexPage"]`;
const INDEX_METADATA_QUERY = `*[_type == "indexPage"]{metaData}`;

export async function generateMetadata(): Promise<Metadata> {
  return getSEOMetaData(INDEX_METADATA_QUERY);
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
    const image = quarter.image.asset
      ? sanityUrlFor(quarter.image.asset)?.url() || ""
      : imagePlaceholder;
    return {
      id: quarter._key,
      title: quarter.title,
      image: image,
      alt: quarter.image.alt,
      link: quarter.link,
    };
  });

  const {
    schemaOrgDataEmail,
    schemaOrgDataLocality,
    schemaOrgDataName,
    schemaOrgDataOpeningHours,
    schemaOrgDataPostalCode,
    schemaOrgDataRegion,
    schemaOrgDataStreetAddress,
    schemaOrgDataTelephone,
    schemaOrgDataUrl,
    seoService,
  } = indexData[0];

  const orgData = {
    seoServices: seoService,
    name: schemaOrgDataName,
    openingHours: schemaOrgDataOpeningHours,
    telephone: schemaOrgDataTelephone,
    url: schemaOrgDataUrl,
    email: schemaOrgDataEmail,
    streetAddress: schemaOrgDataStreetAddress,
    addressLocality: schemaOrgDataLocality,
    postalCode: schemaOrgDataPostalCode,
    addressRegion: schemaOrgDataRegion,
    image: mwLogo.src,
  };

  const projectData = await getCarouselDataAll();
  const schemaData = getJSONLDOrg(orgData);

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
