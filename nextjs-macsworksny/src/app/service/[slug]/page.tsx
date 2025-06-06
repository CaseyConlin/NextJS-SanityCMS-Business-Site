import type { Metadata } from "next";
import { WorkPortfolio } from "@/components/UI/workPortfolio/WorkPortfolio";
import { ServiceHeader } from "@/components/pages/services/ServiceHeader";
import {
  sanityFetchData,
  sanityUrlFor,
  getCarouselData,
  getSEOMetaData,
} from "@/sanity/helpers";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const CLIENT_QUERY = `*[_type == "service" && slug.current == "${slug}"]`;
  return getSEOMetaData(CLIENT_QUERY);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const SERVICE_QUERY = `*[_type == "service" && slug.current == "${slug}"]`;

  const serviceData = await sanityFetchData(SERVICE_QUERY);

  const {
    title,
    bodyTitle1,
    body1,
    bodyTitle2,
    body2,
    workTitle,
    workTitleBody,
  } = serviceData[0];
  const image = sanityUrlFor(serviceData[0].image.image)?.url() || "";
  const alt = serviceData[0].image.alt;

  const catProjectData = await getCarouselData(
    serviceData[0].category,
    "category"
  );

  return (
    <>
      <ServiceHeader
        image={image}
        alt={alt}
        title={title}
        bodyTitle1={bodyTitle1}
        body1={body1}
        bodyTitle2={bodyTitle2}
        body2={body2}
      />
      <WorkPortfolio
        title={workTitle}
        body={workTitleBody}
        portfolioData={catProjectData}
      />
    </>
  );
}
