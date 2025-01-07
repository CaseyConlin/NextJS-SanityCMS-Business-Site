"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Grid from "@mui/material/Grid2";
import { LogoTagLine } from "../../LogoTagLine";
import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { NavBarDropDownButton } from "./NavBarDropDownButton";
import { NavBarButton } from "./NavBarButton";
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
    url: "work",
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
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openNav, setOpenNav] = useState<null | string>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
        <Toolbar
          disableGutters
          // sx={{
          //   display: "flex",
          //   flexDirection: "row",
          //   justifyContent: "center",
          //   alignItems: "center",
          // }}
        >
          <Box
            // width={"100%"}
            // container
            // columns={2}
            // flexDirection={"row"}
            // justifyContent={"center"}
            // alignContent={"center"}
            // flexGrow={0.5}

            sx={{
              width: "100%",
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            <Box flexGrow={0.5} alignContent={"center"}>
              <Box display={"flex"} justifyContent={"end"} alignItems={"end"}>
                {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
                <LogoTagLine />
              </Box>
              {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
              {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography> */}
            </Box>
            <Box
              flexGrow={0.5}
              display={"flex"}
              justifyContent={"flex-end"}
              alignContent={"center"}
            >
              {/* <Box
                display={"flex"}
                // justifyContent={"flex-end"}
                // alignContent={"flex-end"}
              > */}
              <Box
                display={"flex"}
                justifyContent={"flex-end"}
                alignItems={"end"}
                mr={10}
              >
                {pages.map((page) => (
                  // <Link key={page.link} href={page.link}>
                  <div key={page.url}>
                    {page.pages ? (
                      <NavBarDropDownButton
                        page={page}
                        anchorElNav={anchorElNav}
                        handleOpenNavMenu={handleOpenNavMenu}
                        handleCloseNavMenu={handleCloseNavMenu}
                      />
                    ) : (
                      NavBarButton({ page })
                    )}
                  </div>
                  // </Link>
                ))}
              </Box>
            </Box>
            {/* </Grid> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
