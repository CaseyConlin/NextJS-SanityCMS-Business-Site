// import type { Metadata } from "next";

import { ClientHeader } from "@/components/pages/clients/ClientHeader";
import { ClientBody } from "@/components/pages/clients/ClientBody";
import { Carousel } from "@/components/UI/carousel/Carousel";
import { ContactFooter } from "@/components/UI/ContactFooter";
import {
  sanityFetchData,
  sanityUrlFor,
  getCarouselData,
} from "@/sanity/helpers";

// const items = [
//   "Poughkeepise",
//   "New York",
//   "Brooklyn",
//   "Manhattan",
//   "Queens",
//   "Bronx",
//   "Staten Island",
// ];
// export async function generateStaticParams() {
//     return albums.map((album: albumType) => ({
//       slug: album.slug,
//     }));
//   }

//   export async function generateMetadata({
//     params,
//   }: {
//     params: { slug: string };
//   }): Promise<Metadata> {
//     // read route params
//     const id = params.slug;

//     const albumData = albums.find((album) => {
//       return album.slug == id;
//     });

//     // optionally access and extend (rather than replace) parent metadata
//     // const previousImages = (await parent).openGraph?.images || []

//     return {
//       title: albumData?.title,
//       description: albumData?.metaDescription,
//       // openGraph: {
//       //   images: ['/some-specific-page-image.jpg', ...previousImages],
//       // },
//     };
//   }

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const CLIENT_QUERY = `*[_type == "client" && slug.current == "${slug}"]`;

  const clientData = await sanityFetchData(CLIENT_QUERY);
  console.log("clientData", clientData);

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
      <ContactFooter />
    </>
  );
}
