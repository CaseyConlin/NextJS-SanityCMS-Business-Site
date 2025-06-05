import Container from "@mui/material/Container";
import { MWHeading } from "../../UI/MWHeading";
import { SanityDocument } from "next-sanity";
import { PortableTextBody } from "@/sanity/PortableTextBody";
import Box from "@mui/material/Box";
import Image from "next/image";
import MWLightLogo from "../../../../public/logos/miw-updated-logo-light.png";
export const AboutBody = ({ bodyText }: { bodyText: SanityDocument }) => {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: "white",
        backgroundSize: "100vw 10vh",
        background: "#fff url(/patinabg.webp) no-repeat left bottom",
      }}
    >
      <Container
        maxWidth={"xl"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          py: 15,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            pb: 10,
          }}
        >
          <Image src={MWLightLogo} alt="MWLogo" />
        </Box>
        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <MWHeading
            variant="h2"
            component={"h2"}
            text={"About Us"}
            styleProps={{ alignSelf: "flex-start" }}
          ></MWHeading>
          <PortableTextBody text={bodyText} />
        </Box>
      </Container>
    </Container>
  );
};
