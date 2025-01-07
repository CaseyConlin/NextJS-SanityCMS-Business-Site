import { Contact } from "@/components/pages/contact/Contact";
import { Carousel } from "@/components/UI/carousel/Carousel";
import { getCarouselDataAll } from "@/sanity/helpers";

const projectData = await getCarouselDataAll(15);

export default function Page() {
  return (
    <>
      <Contact />
      <Carousel sectionTitle="Our Work" slidesData={projectData} />
    </>
  );
}
