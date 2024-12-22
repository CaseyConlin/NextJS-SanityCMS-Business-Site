import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { WorkCard, WorkCardProps } from "./WorkCard";
import Bridge from "../../../../public/little_steelbridge_7285.jpg";
import { MWHeading } from "../MWHeading";
import { PortableTextBody } from "@/sanity/PortableTextBody";
import { SanityDocument } from "next-sanity";

// const work = [
//   {
//     id: 1,
//     name: "Mid-Hudson Bridge",
//     location: "Poughkeepsie, NY",
//     link: "/",
//     image: Bridge,
//   },
//   {
//     id: 2,
//     name: "Mid-Hudson Bridge",
//     location: "Poughkeepsie, NY",
//     link: "/",
//     image: Bridge,
//   },
//   {
//     id: 3,
//     name: "Mid-Hudson Bridge",
//     location: "Poughkeepsie, NY",
//     link: "/",
//     image: Bridge,
//   },
//   {
//     id: 4,
//     name: "Mid-Hudson Bridge",
//     location: "Poughkeepsie, NY",
//     link: "/",
//     image: Bridge,
//   },
//   {
//     id: 5,
//     name: "Mid-Hudson Bridge",
//     location: "Poughkeepsie, NY",
//     link: "/",
//     image: Bridge,
//   },
//   {
//     id: 6,
//     name: "Mid-Hudson Bridge",
//     location: "Poughkeepsie, NY",
//     link: "/",
//     image: Bridge,
//   },
//   {
//     id: 7,
//     name: "Mid-Hudson Bridge",
//     location: "Poughkeepsie, NY",
//     link: "/",
//     image: Bridge,
//   },
//   {
//     id: 8,
//     name: "Mid-Hudson Bridge",
//     location: "Poughkeepsie, NY",
//     link: "/",
//     image: Bridge,
//   },
// ];

export interface WorkPortfolioCardProps extends WorkCardProps {
  id: string;
}
type WorkPortfolioProps = {
  title: string;
  body: SanityDocument;
  portfolioData: WorkPortfolioCardProps[];
};

export const WorkPortfolio = ({
  title,
  body,
  portfolioData,
}: WorkPortfolioProps) => {
  return (
    <Container maxWidth={"xl"} sx={{ my: 10 }}>
      <MWHeading
        component="h2"
        variant="h2"
        color="white"
        text={title}
        fontSize="3rem"
        fontWeight={800}
        styleProps={{ marginLeft: 5 }}
      />
      <PortableTextBody
        styleProps={{
          color: "#fff",
          width: "60%",
          pt: 3,
          pb: 8,
          marginLeft: 5,
        }}
        text={body}
      />
      <Container
        maxWidth={"xl"}
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-evenly",
          colGap: 0,
          rowGap: 3,
        }}
      >
        {portfolioData.map((portfolioItem) => (
          <WorkCard
            key={portfolioItem.id}
            image={portfolioItem.image}
            alt={portfolioItem.alt}
            title={portfolioItem.title}
            location={portfolioItem.location}
            link={portfolioItem.link}
          />
        ))}
      </Container>
    </Container>
  );
};
