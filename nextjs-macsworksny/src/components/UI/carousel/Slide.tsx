import Link from "next/link";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// import Bridge from "../../../../public/little_steelbridge_7285.jpg";

export type SlideProps = {
  image: string;
  alt: string;
  title: string;
  location: string;
  link: string;
};
export const Slide = ({ image, alt, title, location, link }: SlideProps) => {
  return (
    <Link href={`${link}`}>
      <Box
        m={3}
        sx={{
          position: "relative",
          flex: "0 0 auto",
          width: "225px",
          height: "324px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "1rem",
        }}
      >
        <Image
          src={image}
          alt={alt}
          sizes="100%"
          fill
          style={{ objectFit: "cover" }}
        />
        <Typography
          variant="h4"
          color="white"
          component={"span"}
          px={2}
          py={1}
          sx={{
            position: "absolute",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
            fontSize: ".75rem",
            top: "70%",
            left: 0,
            color: "white",
            background: "rgba(0, 0, 0, 0.5)",
            fontFamily: "Roboto",
            fontWeight: 500,
          }}
        >
          {location}
          <br />
          <Typography
            component="span"
            sx={{ fontSize: "1rem", fontWeight: 700 }}
          >
            {title}
          </Typography>
        </Typography>
      </Box>
    </Link>
  );
};
