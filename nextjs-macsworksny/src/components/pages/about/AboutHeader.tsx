import Image from "next/image";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import bgImage from "../../../../public/lunch-atop-a-skyscraper.webp";

export const AboutHeader = ({ title }: { title: string }) => {
  return (
    <Container
      maxWidth={false}
      sx={{ position: "relative", height: { xs: "50vh", md: "80vh" } }}
    >
      <Image
        src={bgImage}
        alt="Steel Bridge"
        fill
        style={{
          filter: "grayscale(100%) sepia(20%)",
          objectFit: "cover",
        }}
      />
      <Container
        maxWidth="xl"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Box
          sx={{
            position: "absolute",
            bottom: { xs: "15%", md: -15 },
          }}
        >
          <Typography
            component={"h1"}
            color="mwOrange"
            fontWeight={900}
            fontSize={{ xs: "3.5rem", md: "6rem" }}
            lineHeight={1}
            textAlign={"center"}
          >
            {title}
          </Typography>
        </Box>
      </Container>
    </Container>
  );
};
