import { Metadata } from "next";
import { getIndexPageData, getSEOMetaData } from "@/sanity/helpers";
import { WorkPortfolio } from "@/components/UI/workPortfolio/WorkPortfolio";

export async function generateMetadata(): Promise<Metadata> {
  const CLIENT_QUERY = `*[_type == "page" && slug.current == "client"]`;
  return getSEOMetaData(CLIENT_QUERY);
}

export default async function Page() {
  const indexData = await getIndexPageData("client");
  const title = "Our Clients";
  const body =
    "At Macs Iron Works, we serve a wide range of clients—municipal leaders, general contractors, design professionals, developers, and homeowners—throughout the Hudson Valley. Whether you’re working in Poughkeepsie, Kingston, Newburgh, or New Paltz, our team delivers steel solutions tailored to your goals and building type. From large-scale framing to decorative railings, we’ve built lasting partnerships with clients across Dutchess, Ulster, and Orange Counties. Explore the pages below to learn how we support your needs.";

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
