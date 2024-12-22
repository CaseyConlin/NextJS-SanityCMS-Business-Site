import { Contact } from "@/components/pages/contact/Contact";
import { Carousel } from "@/components/UI/carousel/Carousel";
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
      <Contact />
      <Carousel sectionTitle="Our Work" slidesData={items} />
    </>
  );
}
