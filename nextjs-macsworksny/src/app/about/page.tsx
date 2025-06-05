import { Metadata } from "next";
import { AboutBody } from "@/components/pages/about/AboutBody";
import { AboutHeader } from "@/components/pages/about/AboutHeader";
import { Carousel } from "@/components/UI/carousel/Carousel";
import {
  sanityFetchData,
  getCarouselDataAll,
  getSEOMetaData,
} from "@/sanity/helpers";

const ABOUT_QUERY = `*[_type == "page" && slug.current == "about"]`;

export async function generateMetadata(): Promise<Metadata> {
  return getSEOMetaData(ABOUT_QUERY);
}
const aboutData = await sanityFetchData(ABOUT_QUERY);
const { title, body } = aboutData[0];

const projectData = await getCarouselDataAll(15);
export default function Page() {
  return (
    <>
      <AboutHeader title={title} />
      <AboutBody bodyText={body} />
      <Carousel sectionTitle="Our Work" slidesData={projectData} />
    </>
  );
}
