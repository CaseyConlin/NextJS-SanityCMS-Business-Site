import { Metadata } from "next";
import {
  getIndexPageData,
  getSEOMetaData,
  getCarouselDataAll,
} from "@/sanity/helpers";
import { WorkPortfolio } from "@/components/UI/workPortfolio/WorkPortfolio";

export async function generateMetadata(): Promise<Metadata> {
  const OURWORK_QUERY = `*[_type == "page" && slug.current == "ourwork"]`;
  return getSEOMetaData(OURWORK_QUERY);
}

export default async function Page() {
  // const indexData = await getIndexPageData("ourWork");
  const title = "Our Work";
  const body =
    "From custom staircases in Poughkeepsie to structural framing in Beacon and curved railings in Woodstock, Macs Iron Works delivers expertly crafted steel solutions across the Hudson Valley. Our portfolio showcases work for homeowners, municipalities, architects, developers, and contractors throughout Ulster, Dutchess, Orange, and surrounding counties. Explore the featured projects below to see how we bring steel to life across residential, commercial, and civic spaces.";

  const projectData = await getCarouselDataAll(15);

  return (
    <>
      <WorkPortfolio
        index={true}
        title={title}
        body={body}
        portfolioData={projectData}
      />
    </>
  );
}
