import { Metadata } from "next";
import { getIndexPageData, getSEOMetaData } from "@/sanity/helpers";
import { WorkPortfolio } from "@/components/UI/workPortfolio/WorkPortfolio";

export async function generateMetadata(): Promise<Metadata> {
  const OURWORK_QUERY = `*[_type == "page" && slug.current == "ourwork"]`;
  return getSEOMetaData(OURWORK_QUERY);
}

export default async function Page() {
  const indexData = await getIndexPageData("ourWork");
  const title = "Our Work";
  const body =
    "We have worked with a variety of clients in the past. Here are some of the projects we have completed for them.";

  return (
    <>
      <WorkPortfolio
        index={true}
        title={title}
        body={body}
        portfolioData={indexData}
      />
    </>
  );
}
