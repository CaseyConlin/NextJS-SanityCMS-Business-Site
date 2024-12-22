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
        <Typography variant="body1" py={1} textAlign={"center"} width={"65%"}>
          We specialize in structural steel, custom staircases, railings,
          bridges, and ornamental steelwork, working closely with our clients to
          deliver high-quality, durable, and visually stunning results. Have a
          question about an upcoming project or want to request a quote? We’d
          love to hear from you.
        </Typography>

        <Typography
          variant="h3"
          py={1}
          textAlign={"center"}
          fontSize={"1.5rem"}
          pt={5}
        >
          <strong>William Staesser</strong>, Owner/Operator
        </Typography>
        <Typography
          variant="h3"
          py={1}
          textAlign={"center"}
          fontSize={"1.5rem"}
        >
          <strong>Jeffrey McKelvey</strong>, Owner/Operator
        </Typography>
        <Container
          maxWidth="xl"
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            padding: 5,
            color: "white",
            display: "flex",
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              columnGap: 5,
              px: 3,

              pt: 4,
            }}
          >
            <Box sx={{ gridColumn: "1/2", pt: 3 }}>
              <ContactInfo
                orientation="column"
                sizing="large"
                spacing="large"
              />
            </Box>
            <Box sx={{ gridColumn: "2/3" }}>
              <Grid size={{ xs: 12, md: 6 }}>
                <MWHeading
                  variant="h3"
                  component="h3"
                  color="mwOrange"
                  fontWeight={700}
                  fontSize="1.5rem"
                  text="Request a Quote"
                  styleProps={{ pb: 2 }}
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
