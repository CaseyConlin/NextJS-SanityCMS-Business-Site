import { Metadata } from "next";
import { Contact } from "@/components/pages/contact/Contact";
import { Carousel } from "@/components/UI/carousel/Carousel";
import { getCarouselDataAll, getSEOMetaData } from "@/sanity/helpers";

export async function generateMetadata(): Promise<Metadata> {
  const CONTACT_QUERY = `*[_type == "page" && slug.current == "contact"]`;
  return getSEOMetaData(CONTACT_QUERY);
}

const projectData = await getCarouselDataAll(15);

export default function Page() {
  return (
    <>
      <Contact />
      <Carousel sectionTitle="Our Work" slidesData={projectData} />
    </>
  );
}
