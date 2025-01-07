"use client";
import { usePathname } from "next/navigation";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { MWHeading } from "../MWHeading";
import { ContactForm } from "../contactForm/ContactForm";
import { ContactInfo } from "../contactForm/ContactInfo";
import { PortableTextBody } from "@/sanity/PortableTextBody";
import { SanityDocument } from "next-sanity";

type ContactFooterProps = {
  title: string;
  subtitle: string;
  description: SanityDocument;
  image: string;
};
export const ContactFooter = ({
  title,
  subtitle,
  description,
  image,
}: ContactFooterProps) => {
  if (usePathname() === "/contact") return null;
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundImage: `url(${image})`,
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
              text={title}
              styleProps={{ py: 2 }}
            />
          </Box>
          <Box sx={{ gridRow: "2", gridColumn: "1/2" }}>
            <PortableTextBody text={description} />
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
                text={subtitle}
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
