import Image from "next/image";
import { SanityDocument } from "next-sanity";
import { PortableTextBody } from "@/sanity/PortableTextBody";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type ServiceHeaderProps = {
  title: string;
  alt: string;
  image: string;
  bodyTitle1: string;
  body1: SanityDocument;
  bodyTitle2: string;
  body2: SanityDocument;
};
export const ServiceHeader = ({
  title,
  alt,
  image,
  bodyTitle1,
  body1,
  bodyTitle2,
  body2,
}: ServiceHeaderProps) => {
  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          position: "relative",
          height: { xs: "50vh", md: "unset" },
          mb: { xs: 2, md: 20 },
        }}
      >
        <Image
          src={image}
          alt={alt}
          fill
          style={{
            filter: "grayscale(100%) brightness(70%)",
            objectFit: "cover",
            backgroundPosition: "center",
          }}
        />
        <Container
          maxWidth="xl"
          sx={{
            p: { xs: 0, md: 4 },
            pb: { xs: 0, md: 0 },
            display: "grid",
            height: { xs: "50vh", md: "unset" },
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            rowGap: { xs: 1, md: 5 },
          }}
        >
          <Box
            sx={{
              display: { xs: "none", md: "block" },
              position: "relative",
              background:
                "rgba(255, 255, 255, 0.95) url(/patinabg.webp) no-repeat left bottom",
              width: { xs: "100%" },
              p: { xs: 1, md: 2 },
              gridRow: { xs: 2, md: 1 },
              gridColumn: { xs: 1, md: "1/2" },
            }}
          >
            <Typography variant="h4" fontSize="3rem" fontWeight={700}>
              {bodyTitle1}
            </Typography>
            <PortableTextBody text={body1} />
            <Typography variant="h4" fontSize="2rem" fontWeight={400} mt={3}>
              {bodyTitle2}
            </Typography>
            <PortableTextBody text={body2} styleProps={{ pb: 6 }} />
          </Box>
          <Box
            sx={{
              position: "relative",
              bottom: 0,
              gridRow: 2,
              gridColumn: "1/3",
              height: { xs: "100%", md: "5.6rem" },
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <Typography
              variant="h1"
              color="mwOrange"
              fontWeight={900}
              fontSize={{ xs: "4rem", md: "6rem" }}
              sx={{
                transform: {
                  xs: "translateY(.9rem)",
                  md: "translateY(1.25rem)",
                },
              }}
            >
              {title}
            </Typography>
          </Box>
        </Container>
      </Container>
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          position: "static",
          background:
            "rgba(255, 255, 255, 0.95) url(/patinabg.webp) no-repeat left bottom",
          width: { xs: "100%", md: "45%" },
          p: 2,
          pb: 4,
        }}
        mb={15}
      >
        <Typography variant="h4" fontSize="3rem" fontWeight={700}>
          {bodyTitle1}
        </Typography>
        <PortableTextBody text={body1} />
        <Typography variant="h4" fontSize="2rem" fontWeight={400} mt={3}>
          {bodyTitle2}
        </Typography>
        <PortableTextBody text={body2} />
      </Box>
    </>
  );
};
