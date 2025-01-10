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
        p: { xs: 1, md: 2 },
      }}
    >
      <Container maxWidth={"xl"} sx={{}}>
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(6, 1fr)",
            gap: { xs: 4, md: 1 },
            padding: { xs: 1, md: 3 },
          }}
        >
          <Box
            sx={{
              gridRow: "1",
              gridColumn: { xs: "1/7", md: "1/3" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: { xs: 3, md: 0 },
            }}
          >
            <Image src={MWLightLogo} alt="MWLogo" />
          </Box>
          <Box
            sx={{
              gridRow: { xs: "2", md: "1" },
              gridColumn: { xs: "1/7", md: "3/7" },
              display: { xs: "flex", md: "unset" },
              justifyContent: { xs: "center", md: "unset" },
              alignItems: { xs: "center", md: "unset" },
              flexDirection: { xs: "column", md: "unset" },
            }}
          >
            <MWHeading
              variant="h2"
              component={"h2"}
              styleProps={{
                textAlign: { xs: "center", md: "left" },
                fontSize: { xs: "1.5rem", md: "2rem" },
              }}
              text={title}
            ></MWHeading>
            <PortableTextBody
              text={text}
              styleProps={{ textAlign: { xs: "center", md: "left" } }}
            />
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
