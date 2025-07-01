import Link from "next/link";
import Container from "@mui/material/Container";
import { MWHeading } from "../../UI/MWHeading";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Image from "next/image";
import { ContactInfo } from "../../UI/contactForm/ContactInfo";
import { ContactForm } from "../../UI/contactForm/ContactForm";
import MWLightLogo from "../../../../public/logos/miw-updated-logo-light.png";
export const Contact = () => {
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
          alignItems: "center",
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
        <MWHeading
          variant="h2"
          component={"h2"}
          text={"Contact Macs Iron Works"}
          styleProps={{ textAlign: "center", alignSelf: "center" }}
        ></MWHeading>
        <Typography
          variant="body1"
          py={1}
          textAlign={"center"}
          width={{ xs: "100%", md: "65%" }}
        >
          Whether it’s structural fabrication, custom staircases, ornamental
          railings, or detailed metalwork, at Macs Iron Works, we combine
          craftsmanship and reliability in every steel project . Serving Ulster
          County, Dutchess County, and areas in and around New Paltz, Woodstock,
          and Poughkeepsie, NY, we partner with both homeowners and builders to
          deliver durable, high-quality results.
        </Typography>
        <Typography
          variant="body1"
          py={1}
          textAlign={"center"}
          width={{ xs: "100%", md: "65%" }}
        >
          From new residential builds to commercial renovations, our team is
          dedicated to meeting deadlines, staying on budget, and upholding top
          safety standards. Let us help you enhance your space with steel
          solutions that are built to last.
        </Typography>
        <Typography
          variant="body1"
          py={1}
          textAlign={"center"}
          width={{ xs: "100%", md: "65%" }}
        >
          Contact us today to get started.
        </Typography>

        <Typography
          variant="h3"
          textAlign={"center"}
          fontSize={"1.5rem"}
          pt={5}
        >
          <strong>William Staesser</strong>, Owner/Operator
        </Typography>
        <Link href="tel:3478356126">
          <Typography variant="h6" textAlign={"center"} color="mwOrange">
            (347) 835-6126
          </Typography>
        </Link>
        <Typography
          variant="h3"
          pt={2}
          textAlign={"center"}
          fontSize={"1.5rem"}
        >
          <strong>Jeffery McKelvey</strong>, Owner/Operator
        </Typography>
        <Link href="tel:8457066905">
          <Typography variant="h6" textAlign={"center"} color="mwOrange">
            (845) 706-6905
          </Typography>
        </Link>
        <Container
          maxWidth="xl"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            padding: { xs: 0, md: 5 },
            color: "white",
            display: "flex",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              columnGap: { xs: 0, md: 5 },
              px: { xs: 0, md: 3 },
              pt: 4,
            }}
          >
            <Box sx={{ gridColumn: { xs: "1/3", md: "1/2" }, pt: 3 }}>
              <ContactInfo
                orientation="column"
                sizing="large"
                spacing="large"
              />
            </Box>
            <Box
              sx={{
                gridColumn: { xs: "1/3", md: "2/3" },
                pt: { xs: 5, md: 3 },
              }}
            >
              <Grid size={{ xs: 12, md: 6 }}>
                <MWHeading
                  variant="h3"
                  component="h3"
                  color="mwOrange"
                  fontWeight={700}
                  fontSize="1.5rem"
                  text="Request a Quote"
                  styleProps={{
                    pb: 2,
                    textAlign: { xs: "center", md: "left" },
                  }}
                />
                <ContactForm />
              </Grid>
            </Box>
          </Box>
        </Container>
      </Container>
    </Container>
  );
};
