"use client";

// import { useContext } from "react";
import Image from "next/image";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
// import Grid from "@mui/material/Grid"; // Grid version 2
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import Link from "next/link";

import { YouTube } from "@mui/icons-material";
import { FacebookOutlined } from "@mui/icons-material";

// import { NavMenuContext } from "./context/navMenuContext";

// import bg from "../../public/bulldozerseaguls.webp";
import mwLogo from "../../public/mw-logo-big-half-white-black-text.webp";
import footerpatina from "../../public/footer-patination.webp";
import { ContactInfo } from "./UI/contactForm/ContactInfo";

const pages = [
  { name: "Services", link: "services" },
  { name: "Our Work", link: "our-work" },
  { name: "Our Clients", link: "our-clients" },
  { name: "About", link: "about" },
  { name: "Contact", link: "contact" },
];

export const Footer = () => {
  //   const { setHideNavState } = useContext(NavMenuContext);

  //   const linkClickHandler = () => {
  //     setHideNavState(false);
  //   };

  return (
    <Grid
      container
      flexDirection={"column"}
      style={{
        justifyContent: "center",
        alignItems: "center",
        // backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bg.src})`,
        backgroundImage: `url(${footerpatina.src})`,
        // height: 450,
        objectFit: "cover",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom ",
        backgroundColor: "#FF6600",
      }}
    >
      <Toolbar disableGutters sx={{ display: "flex" }}>
        <Grid
          p={8}
          container
          sx={{
            justifyContent: "center",
            width: "85vw",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Link href="/">
            <Image src={mwLogo} alt="Macs Iron Works Logo" />
          </Link>
          <Grid
            py={0}
            my={0}
            //   xs={4}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {pages.map((page) => (
              <Typography
                key={page.name}
                sx={{
                  my: 2,
                  mx: 2,
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  textTransform: "capitalize",
                  color: "#fff",
                  display: "block",
                }}
              >
                <Link href={`/${page.link}`}>{page.name}</Link>
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Toolbar>
      <Grid
        mt={0}
        my={0}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100vw",
        }}
      >
        <ContactInfo color="white" fontColor="white" orientation="column" />
      </Grid>
      <Grid
        mt={15}
        sx={{
          display: "flex",
          letterSpacing: ".175rem",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-end",
          color: "white",
          fontSize: { xs: "1rem", md: "1.25rem" },
          width: "100vw",
        }}
      >
        <Link
          href="https://parkcrestdesign.com"
          aria-label="parkcrest design link"
        >
          <Typography color="white" mb={15} fontWeight={700}>
            Website by Parkcrest Design
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};
