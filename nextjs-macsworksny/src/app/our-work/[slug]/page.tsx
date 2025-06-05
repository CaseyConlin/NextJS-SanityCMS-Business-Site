import type { Metadata } from "next";
import { WorkPortfolio } from "@/components/UI/workPortfolio/WorkPortfolio";
import {
  sanityFetchData,
  getCarouselData,
  getSEOMetaData,
} from "@/sanity/helpers";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const CLIENT_QUERY = `*[_type == "ourWork" && slug.current == "${slug}"]`;
  return getSEOMetaData(CLIENT_QUERY);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const OUR_WORK_QUERY = `*[_type == "ourWork" && slug.current == "${slug}"]`;

  const ourWorkData = await sanityFetchData(OUR_WORK_QUERY);

  const { title, body } = ourWorkData[0];

  const catProjectData = await getCarouselData(
    ourWorkData[0].category,
    "category"
  );

  return (
    <>
      <WorkPortfolio title={title} body={body} portfolioData={catProjectData} />
    </>
  );
}
