import { Metadata } from "next";
import { getIndexPageData, getSEOMetaData } from "@/sanity/helpers";
import { WorkPortfolio } from "@/components/UI/workPortfolio/WorkPortfolio";

export async function generateMetadata(): Promise<Metadata> {
  const SERVICE_QUERY = `*[_type == "page" && slug.current == "service"]`;
  return getSEOMetaData(SERVICE_QUERY);
}

export default async function Page() {
  const indexData = await getIndexPageData("service");
  const title = "Our Services";
  const body =
    "At Macs Iron Works, we offer expert steel fabrication services throughout the Hudson Valley, including Dutchess, Ulster, Orange, and surrounding counties. Whether you're a homeowner, contractor, architect, developer, or municipality, our team delivers structural steel, railings, staircases, and bridges built to last. Explore the services below to see how we bring strength, precision, and design to every project.";
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
