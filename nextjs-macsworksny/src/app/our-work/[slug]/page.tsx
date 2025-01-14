import { WorkPortfolio } from "@/components/UI/workPortfolio/WorkPortfolio";
import { sanityFetchData, getCarouselData } from "@/sanity/helpers";

export default async function Page({ params }: { params: { slug: string } }) {
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
