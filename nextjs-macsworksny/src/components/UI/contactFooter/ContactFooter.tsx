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
        backgroundPosition: "center",
        p: { xs: 1, sm: 5 },
        mt: 10,
        mb: 20,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          padding: { xs: 1, sm: 5 },
          color: "white",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: { xs: "repeat(1, 1fr)", sm: "repeat(2, 1fr)" },
            columnGap: 5,
            rowGap: { xs: 1, sm: 5 },
            px: { xs: 1, sm: 3 },
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Box sx={{ gridRow: "1", gridColumn: { xs: 1, sm: "1/3" } }}>
            <MWHeading
              variant="h2"
              component="h2"
              color="black"
              fontWeight={400}
              text={title}
              styleProps={{
                py: { xs: 1, sm: 2 },
                fontSize: { xs: "2rem", sm: "2rem" },
                textAlign: { xs: "center", sm: "left" },
              }}
            />
          </Box>
          <Box sx={{ gridRow: "2", gridColumn: { xs: 1, sm: "1/2" } }}>
            <PortableTextBody text={description} />
            <Typography color="black" pt={2}>
              <b>William Staesser</b>, Owner/Operator
            </Typography>
            <Typography color="black">
              <b>Jeffery McKelvey</b>, Owner/Operator
            </Typography>
            <MWHeading
              variant="h3"
              component="h3"
              color="mwOrange"
              fontWeight={700}
              fontSize="1.5rem"
              text={subtitle}
              styleProps={{ py: 4 }}
            />
            <ContactInfo />
          </Box>
          <Box
            sx={{
              gridRow: { xs: "3", sm: "2" },
              gridColumn: { xs: 1, sm: "2/3" },
            }}
          >
            <Grid size={{ xs: 12, sm: 6 }}>
              <MWHeading
                variant="h3"
                component="h3"
                color="mwOrange"
                fontWeight={700}
                fontSize="1.5rem"
                text="Request a Quote"
                styleProps={{ py: { xs: 4, sm: 2 } }}
              />
              <ContactForm />
            </Grid>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};
