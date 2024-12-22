import { AboutBody } from "@/components/pages/about/AboutBody";
import { AboutHeader } from "@/components/pages/about/AboutHeader";
import { Carousel } from "@/components/UI/carousel/Carousel";
import { ContactFooter } from "@/components/UI/ContactFooter";
const items = [
  "Poughkeepise",
  "New York",
  "Brooklyn",
  "Manhattan",
  "Queens",
  "Bronx",
  "Staten Island",
];
export default function Page() {
  return (
    <>
      <AboutHeader />
      <AboutBody />
      <Carousel sectionTitle="Our Work" slidesData={items} />
      <ContactFooter />
    </>
  );
}
