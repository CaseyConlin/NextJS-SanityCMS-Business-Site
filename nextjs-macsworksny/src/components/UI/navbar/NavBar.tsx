"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { LogoTagLine } from "../../LogoTagLine";
import { MobileNavBar } from "./Mobile/MobileNavBar";
import { DesktopNavBar } from "./Desktop/DesktopNavBar";

const pages = [
  {
    name: "Services",
    url: "services",
    pages: [
      { name: "bridges", link: "bridges" },
      { name: "structural-steel", link: "structural-steel" },
      { name: "staircases", link: "staircases" },
      { name: "railings", link: "railings" },
    ],
  },
  {
    name: "Our Work",
    url: "our-work",
    pages: [
      { name: "bridges", link: "bridges" },
      { name: "structural-steel", link: "structural-steel" },
      { name: "staircases", link: "staircases" },
      { name: "railings", link: "railings" },
    ],
  },
  {
    name: "Our Clients",
    url: "clients",
    pages: [
      { name: "municipalities", link: "municipalities" },
      { name: "contractors", link: "contractors" },
      { name: "developers", link: "developers" },
      { name: "architects", link: "architects" },
      { name: "homeowners", link: "homeowners" },
    ],
  },
  { name: "About", url: "about" },
  { name: "Contact", url: "contact" },
];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [mobileAnchorElNav, setMobileAnchorElNav] =
    useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenMobileNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMobileAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setMobileAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "transparent",
        paddingTop: 5,
        borderBottom: "1px solid #ff6600",
        mb: 0.4,
        zIndex: 1000,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(3, 1fr)",
                md: "repeat(2, 1fr)",
              },
            }}
          >
            <Box
              flexGrow={0.5}
              alignContent={"center"}
              sx={{ gridColumn: { xs: "1/3", md: "1/2" } }}
            >
              <Box display={"flex"} justifyContent={"end"} alignItems={"end"}>
                <LogoTagLine />
              </Box>
            </Box>
            <Box
              flexGrow={0.5}
              display={"flex"}
              justifyContent={"flex-end"}
              alignContent={"center"}
            >
              {pages && (
                <MobileNavBar
                  handleOpenMobileNavMenu={handleOpenMobileNavMenu}
                  handleCloseNavMenu={handleCloseNavMenu}
                  mobileAnchorElNav={mobileAnchorElNav}
                  pages={pages}
                />
              )}
              {pages && (
                <DesktopNavBar
                  anchorElNav={anchorElNav}
                  handleOpenNavMenu={handleOpenNavMenu}
                  handleCloseNavMenu={handleCloseNavMenu}
                  pages={pages}
                />
              )}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
