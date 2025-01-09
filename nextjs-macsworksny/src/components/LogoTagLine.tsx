import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export const LogoTagLine = () => {
  return (
    <Grid
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
      textTransform={"uppercase"}
      fontFamily={"Roboto"}
    >
      <Link href="/">
        <Typography
          component="h1"
          fontSize={{ xs: "1.5rem", md: "1.75rem" }}
          fontWeight={900}
          lineHeight={"1.75rem"}
          letterSpacing={"0.0001rem"}
        >
          Macs Iron Works
        </Typography>
        <Typography
          component="h2"
          fontSize={{ xs: "1rem", md: "1.125rem" }}
          fontWeight={400}
          lineHeight={"1.375rem"}
        >
          Steel Fabrication & Erecting
        </Typography>
      </Link>
    </Grid>
  );
};
