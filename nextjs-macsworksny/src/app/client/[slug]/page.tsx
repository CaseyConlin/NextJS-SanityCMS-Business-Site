import type { Metadata } from "next";

import { ClientHeader } from "@/components/pages/clients/ClientHeader";
import { ClientBody } from "@/components/pages/clients/ClientBody";
import { Carousel } from "@/components/UI/carousel/Carousel";
import {
  sanityFetchData,
  sanityUrlFor,
  getCarouselData,
  getSEOMetaData,
} from "@/sanity/helpers";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const CLIENT_QUERY = `*[_type == "client" && slug.current == "${slug}"]`;
  return getSEOMetaData(CLIENT_QUERY);
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const CLIENT_QUERY = `*[_type == "client" && slug.current == "${slug}"]`;

  const clientData = await sanityFetchData(CLIENT_QUERY);

  const {
    leadInText,
    clientName,
    bodyTitle1,
    body1,
    bodyTitle2,
    body2,
    services,
  } = clientData[0];
  const image = sanityUrlFor(clientData[0].image.image)?.url() || "";
  const alt = clientData[0].image.alt;

  const clientCatProjectData = await getCarouselData(
    [clientData[0].clientName],
    "clientCategory"
  );

  return (
    <>
      <ClientHeader
        leadin={leadInText}
        client={clientName}
        alt={alt}
        image={image}
      />
      <ClientBody
        title1={bodyTitle1}
        body1={body1}
        title2={bodyTitle2}
        body2={body2}
        services={services}
      />
      <Carousel
        sectionTitle={`More work with ${clientName}`}
        slidesData={clientCatProjectData}
      />
    </>
  );
}
