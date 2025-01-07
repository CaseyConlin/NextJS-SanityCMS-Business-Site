import { AboutBody } from "@/components/pages/about/AboutBody";
import { AboutHeader } from "@/components/pages/about/AboutHeader";
import { Carousel } from "@/components/UI/carousel/Carousel";
import { getCarouselDataAll } from "@/sanity/helpers";

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
