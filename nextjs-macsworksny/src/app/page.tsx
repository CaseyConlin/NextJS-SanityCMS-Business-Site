import type { Metadata } from "next";
import { type SanityDocument } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import {
  sanityFetchData,
  sanityUrlFor,
  getCarouselDataAll,
} from "@/sanity/helpers";
import { HomeExpandingHeader } from "@/components/UI/HomeExpandingHeader";
import { HomeAbout } from "@/components/pages/home/HomeAbout";
import { Carousel } from "../components/UI/carousel/Carousel";
import { ContactFooter } from "@/components/UI/ContactFooter";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;
const INDEX_QUERY = `*[_type == "indexPage"]`;
// const PROJECTS_QUERY = `*[
//   _type == "project"
//   && defined(slug.current)
// ]|order(publishedAt desc)[0...12]{_id, title, slug, location, imagesGallery[0], publishedAt}`;

const options = { next: { revalidate: 30 } };
// const { projectId, dataset } = client.config();

// const urlFor = (source: SanityImageSource) =>
//   projectId && dataset
//     ? imageUrlBuilder({ projectId, dataset }).image(source)
//     : null;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // read route params
  const indexMetadata = await client.fetch<SanityDocument>(
    INDEX_QUERY,
    {}
    // options
  );
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
  return {
    // title: albumData?.title,
    // description: albumData?.metaDescription,
    title: indexMetadata[0].metaTitle,
    description: indexMetadata[0].metaDescription,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

export default async function IndexPage() {
  // const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  const indexData = await sanityFetchData(INDEX_QUERY);
  // const projects = await sanityFetchData(PROJECTS_QUERY);

  // const items = [
  //   "Poughkeepise",
  //   "New York",
  //   "Brooklyn",
  //   "Manhattan",
  //   "Queens",
  //   "Bronx",
  //   "Staten Island",
  // ];

  // const quarters = [
  //   {
  //     id: "1",
  //     title: "Bridges",
  //     image: Bridge,
  //   },
  //   {
  //     id: "2",
  //     title: "Structural Steel",
  //     image: Bridge,
  //   },
  //   {
  //     id: "3",
  //     title: "Staircases",
  //     image: Bridge,
  //   },
  //   {
  //     id: "4",
  //     title: "Ornamental Railings",
  //     image: Bridge,
  //   },
  // ];

  // const { heroImages, aboutLink, aboutDescription } = indexData[0];
  type HeroImage = {
    alt: string;
    title: string;
    image: {
      asset: SanityImageSource;
      alt: string;
    };
    _key: string;
    link: string;
  };

  // type Project = {
  //   _id: string;
  //   title: string;
  //   location: string;
  //   imagesGallery: {
  //     image: SanityImageSource;
  //     alt: string;
  //   };
  //   slug: {
  //     current: string;
  //   };
  // };
  // interface IndexData {
  //   heroImages: HeroImage[];
  //   metaDescription: string;
  //   aboutLink: string;
  //   aboutDescription: string;
  // }

  const heroImagesData = indexData[0].heroImages.map((quarter: HeroImage) => {
    return {
      id: quarter._key,
      title: quarter.title,
      image: sanityUrlFor(quarter.image.asset)?.url() || "",
      alt: quarter.image.alt,
      link: quarter.link,
    };
  });

  // const projectData = projects.map((project: SanityDocument) => {
  //   return {
  //     id: project._id,
  //     title: project.title,
  //     location: project.location,
  //     image: sanityUrlFor(project.imagesGallery.image)?.url() || "",
  //     alt: project.imagesGallery.alt,
  //     link: project.slug.current,
  //   };
  // });

  const projectData = await getCarouselDataAll(15);

  return (
    <main>
      <HomeExpandingHeader quarters={heroImagesData} />
      <HomeAbout
        title={indexData[0].aboutTitle}
        text={indexData[0].aboutDescription}
        link={indexData[0].aboutLink}
      />
      <Carousel sectionTitle="Our Work" slidesData={projectData} />
      <ContactFooter />
    </main>
    // <main className="container mx-auto min-h-screen max-w-3xl p-8">
    //   <h1 className="text-4xl font-bold mb-8">Posts</h1>
    //   <ul className="flex flex-col gap-y-4">
    //     {posts.map((post) => (
    //       <li className="hover:underline" key={post._id}>
    //         <Link href={`/${post.slug.current}`}>
    //           <h2 className="text-xl font-semibold">{post.title}</h2>
    //           <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
    // </main>
  );
}
