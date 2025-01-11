import Container from "@mui/material/Container";
import { WorkCard, WorkCardProps } from "./WorkCard";
import { MWHeading } from "../MWHeading";
import { PortableTextBody } from "@/sanity/PortableTextBody";
import { SanityDocument } from "next-sanity";

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
        fontWeight={800}
        styleProps={{
          fontSize: { xs: "1.75rem", md: "3rem" },
          marginLeft: { xs: 0, md: 5 },
        }}
      />
      <PortableTextBody
        styleProps={{
          color: "#fff",
          width: { xs: "100%", md: "60%" },
          pt: 3,
          pb: 8,
          marginLeft: { xs: 0, md: 5 },
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
