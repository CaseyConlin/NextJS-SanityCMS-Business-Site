import { getIndexPageData } from "@/sanity/helpers";
import { WorkPortfolio } from "@/components/UI/workPortfolio/WorkPortfolio";

export default async function Page() {
  const indexData = await getIndexPageData("service");
  const title = "Our Services";
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
