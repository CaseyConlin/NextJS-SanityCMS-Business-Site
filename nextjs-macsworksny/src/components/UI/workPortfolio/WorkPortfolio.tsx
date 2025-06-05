import Container from "@mui/material/Container";
import { WorkCard, WorkCardProps } from "./WorkCard";
import { MWHeading } from "../MWHeading";
import { PortableTextBody } from "@/sanity/PortableTextBody";
import { SanityDocument } from "next-sanity";
import Typography from "@mui/material/Typography";

export interface WorkPortfolioCardProps extends WorkCardProps {
  id: string;
}
type WorkPortfolioProps = {
  index?: boolean;
  title: string;
  body: SanityDocument | string;
  portfolioData: WorkPortfolioCardProps[];
};

export const WorkPortfolio = ({
  index,
  title,
  body,
  portfolioData,
}: WorkPortfolioProps) => {
  console.log(portfolioData);
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
      {typeof body === "string" ? (
        <Typography
          variant="body1"
          py={1}
          sx={{
            color: "#fff",
            width: { xs: "100%", md: "60%" },
            pt: 3,
            pb: 8,
            marginLeft: { xs: 0, md: 5 },
            a: { color: "#FF6600", fontWeight: 500 },
          }}
        >
          {body}
        </Typography>
      ) : (
        <PortableTextBody
          styleProps={{
            color: "#fff",
            width: { xs: "100%", md: "60%" },
            pt: 3,
            pb: 8,
            marginLeft: { xs: 0, md: 5 },
            marginBottom: 1,
          }}
          text={body}
        />
      )}
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
            index={index}
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
