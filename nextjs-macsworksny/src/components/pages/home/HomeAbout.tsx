import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { MWHeading } from "../../UI/MWHeading";
import { MWButton } from "../../UI/MWButton";
import { PortableTextBody } from "@/sanity/PortableTextBody";
import MWLightLogo from "../../../../public/logos/miw-updated-logo-light.png";

type HomeAboutProps = {
  title: string;
  text: SanityDocument;
  link: string;
};

export const HomeAbout = ({ title, text, link }: HomeAboutProps) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: "white",
        backgroundSize: "100vw 10vh",
        background: "#fff url(/patinabg.webp) no-repeat left bottom",
        mt: 15,
      }}
    >
      <Container maxWidth={"xl"} sx={{}}>
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: 1,
            padding: 3,
          }}
        >
          <Box
            sx={{
              gridRow: "1",
              gridColumn: "1/3",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image src={MWLightLogo} alt="MWLogo" />
          </Box>
          <Box sx={{ gridRow: "1", gridColumn: "3/7" }}>
            <MWHeading variant="h2" component={"h2"} text={title}></MWHeading>
            <PortableTextBody text={text} />
            <MWButton
              text="Learn More"
              link={link}
              color="mwOrange"
              my={2}
              styleProps={{ "& :hover": "color: white" }}
            />
          </Box>
        </Box>
      </Container>
    </Container>
  );
};
