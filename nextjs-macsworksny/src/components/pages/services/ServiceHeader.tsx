import Image from "next/image";
import { SanityDocument } from "next-sanity";
import { PortableTextBody } from "@/sanity/PortableTextBody";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
// import bgImage from "../../../../public/topic-golden-gate-bridge-gettyimages-177770941.jpg";

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
    <Container maxWidth={false} sx={{ position: "relative", mb: 20 }}>
      <Image
        src={image}
        alt={alt}
        fill
        style={{ filter: "grayscale(100%)", objectFit: "cover" }}
      />
      <Container maxWidth="xl" sx={{ p: 4 }}>
        <Box
          p={2}
          sx={{
            position: "relative",
            background:
              "rgba(255, 255, 255, 0.95) url(/patinabg.webp) no-repeat left bottom",
            width: "45%",
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
        <Typography
          variant="h1"
          color="mwOrange"
          fontWeight={900}
          fontSize={"6rem"}
          sx={{ position: "absolute", bottom: -23 }}
        >
          {title}
        </Typography>
      </Container>
    </Container>
  );
};
