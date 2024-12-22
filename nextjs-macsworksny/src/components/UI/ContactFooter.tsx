import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { MWHeading } from "./MWHeading";
import { ContactForm } from "./contactForm/ContactForm";
import { ContactInfo } from "./contactForm/ContactInfo";

export const ContactFooter = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundImage: "url(/USB-Blog-Steel-Bridge-Structures.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        p: 5,
        mt: 10,
        mb: 20,
      }}
    >
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
          }}
        >
          <Box sx={{ gridRow: "1", gridColumn: "1/3" }}>
            <MWHeading
              variant="h2"
              component="h2"
              color="black"
              fontWeight={400}
              text="Let’s Work on Your Next Project"
              styleProps={{ py: 2 }}
            />
          </Box>
          <Box sx={{ gridRow: "2", gridColumn: "1/2" }}>
            <Typography color="black" pt={2}>
              At Macs Works, we bring precision and artistry to every steel
              project, from fabrication and staircases to railings and
              ornamental work. Specializing in residential and commercial
              builds, we’re committed to completing each project on time, within
              budget, and with a strong focus on safety. Whether you&apos;re
              creating new structures or enhancing existing ones, we’re here to
              bring your vision to life with quality and dependability.
            </Typography>
            <Typography color="black" pt={2}>
              <b>William Staesser</b>, Owner/Operator
            </Typography>
            <Typography color="black">
              <b>Jeffrey McKelvey</b>, Owner/Operator
            </Typography>
            <MWHeading
              variant="h3"
              component="h3"
              color="mwOrange"
              fontWeight={700}
              fontSize="1.5rem"
              text="Ready to Start? Contact Us Today!"
              styleProps={{ py: 4 }}
            />
            <ContactInfo />
          </Box>
          <Box sx={{ gridRow: "2", gridColumn: "2/3" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <MWHeading
                variant="h3"
                component="h3"
                color="mwOrange"
                fontWeight={700}
                fontSize="1.5rem"
                text="Request a Quote"
                styleProps={{ py: 2 }}
              />
              <ContactForm />
            </Grid>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};
