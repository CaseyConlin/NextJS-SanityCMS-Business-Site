import { Metadata } from "next";
import { AboutBody } from "@/components/pages/about/AboutBody";
import { AboutHeader } from "@/components/pages/about/AboutHeader";
import { Carousel } from "@/components/UI/carousel/Carousel";
import { getCarouselDataAll, getSEOMetaData } from "@/sanity/helpers";

export async function generateMetadata(): Promise<Metadata> {
  const ABOUT_QUERY = `*[_type == "page" && slug.current == "about"]`;
  return getSEOMetaData(ABOUT_QUERY);
}

const projectData = await getCarouselDataAll(15);

export default function Page() {
  return (
    <>
      <AboutHeader />
      <AboutBody />
      <Carousel sectionTitle="Our Work" slidesData={projectData} />
    </>
  );
}
