import {
  sanityFetchData,
  sanityUrlFor,
  getCarouselData,
} from "@/sanity/helpers";
import { WorkPortfolio } from "@/components/UI/workPortfolio/WorkPortfolio";
import { ServiceHeader } from "@/components/pages/services/ServiceHeader";
import { ContactFooter } from "@/components/UI/contactFooter/ContactFooter";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const SERVICE_QUERY = `*[_type == "service" && slug.current == "${slug}"]`;

  const serviceData = await sanityFetchData(SERVICE_QUERY);

  return (
    <>
      {/* <ServiceHeader
        image={image}
        alt={alt}
        title={title}
        bodyTitle1={title1}
        body1={body1}
        bodyTitle2={title2}
        body2={body2}
      /> */}
      <WorkPortfolio />
      <ContactFooter />
    </>
  );
}
