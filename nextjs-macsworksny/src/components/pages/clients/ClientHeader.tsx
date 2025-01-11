import Image from "next/image";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type ClientHeaderProps = {
  leadin: string;
  client: string;
  alt: string;
  image: string;
};
export const ClientHeader = ({
  leadin,
  client,
  alt,
  image,
}: ClientHeaderProps) => {
  return (
    <Container
      maxWidth={false}
      sx={{ position: "relative", mb: 20, height: "80vh" }}
    >
      <Image
        src={image}
        alt={alt}
        fill
        style={{
          filter: "grayscale(100%) brightness(70%)",
          objectFit: "cover",
        }}
      />
      <Container maxWidth="xl" sx={{ p: 4 }}>
        <Box
          sx={{
            position: "absolute",
            bottom: -15,
            right: "5%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "flex-end",
          }}
        >
          <Typography
            variant="h1"
            component={"h1"}
            color="white"
            fontWeight={300}
            fontSize={"5rem"}
            textAlign={"right"}
            sx={{
              margin: 0,
              padding: 0,
              lineHeight: 0.5,
            }}
          >
            {leadin}
            <br />
            <Typography
              component={"span"}
              display={"inline"}
              color="mwOrange"
              fontWeight={900}
              fontSize={"6rem"}
              textAlign={"right"}
              sx={{
                margin: 0,
                padding: 0,
                lineHeight: 1,
              }}
            >
              {client}
            </Typography>
          </Typography>
        </Box>
      </Container>
    </Container>
  );
};
