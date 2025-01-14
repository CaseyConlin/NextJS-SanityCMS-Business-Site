import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import { MWButton } from "../MWButton";

export type WorkCardProps = {
  image: string;
  alt: string;
  title: string;
  location: string;
  link: string;
};
export const WorkCard = ({
  title,
  location,
  link,
  image,
  alt,
}: WorkCardProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        flex: { xs: "0 0 100%", sm: "0 0 45%", md: "0 0 31%" },
        height: "354px",
        display: "flex",
        alignItems: "center",
        color: "white",
      }}
    >
      <Image src={image} alt={alt} fill style={{ objectFit: "cover" }} />
      <Box
        sx={{
          position: "absolute",
          top: "60%",
          left: 0,
          color: "white",
          fontFamily: "Roboto",
        }}
      >
        <Box px={2} py={1} sx={{ background: "rgba(0, 0, 0, 0.5)" }}>
          <Typography
            variant="h5"
            color="white"
            fontWeight={600}
            fontSize={"1.25rem"}
            component={"h4"}
          >
            {location}
          </Typography>
          <Typography
            variant="h4"
            color="white"
            fontWeight={400}
            fontSize={"1.5rem"}
            component={"h5"}
          >
            {title}
          </Typography>
        </Box>
        <MWButton
          color="mwOrange"
          link={link}
          text="View Project"
          styleProps={{ mt: 2, ml: 2 }}
        />
      </Box>
    </Box>
  );
};
