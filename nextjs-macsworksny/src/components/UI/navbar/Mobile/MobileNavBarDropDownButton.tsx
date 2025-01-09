"use client";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import Link from "next/link";
import { TransitionGroup } from "react-transition-group";

type MobileNavBarDropDownButtonProps = {
  page: {
    name: string;
    url: string;
    pages?: { name: string; link: string }[];
  };
  handleCloseNavMenu: () => void;
};

export const MobileNavBarDropDownButton = ({
  page,
  handleCloseNavMenu,
}: MobileNavBarDropDownButtonProps) => {
  const [showSubItems, setShowSubItems] = useState(false);

  const handleNavMenuClick = () => {
    handleCloseNavMenu();
    setShowSubItems(false);
  };

  return (
    <>
      <Button
        color="mwOrange"
        id={`${page.url}-button`}
        onClick={() => setShowSubItems(!showSubItems)}
        sx={{
          fontSize: "1.125rem",
          mb: 0,
          pb: 0,
          display: "flex",
          color: showSubItems ? "#fff" : "mwOrange",
        }}
      >
        {page.name.replace("-", " ")}{" "}
        <ArrowDropDownIcon
          sx={{
            transition: "transform 0.3s",
            transform: showSubItems ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </Button>

      <Box id={`${page.url}-menu`} sx={{ pl: 1 }}>
        <TransitionGroup>
          {showSubItems &&
            page.pages?.map((subPage) => (
              <Collapse key={`${page.url}-${subPage.link}`} in={showSubItems}>
                <Box
                  component="ul"
                  onClick={handleNavMenuClick}
                  sx={{
                    color: "#fff",
                  }}
                >
                  <Link href={`/${page.url}/${subPage.link}`}>
                    <Typography
                      component="li"
                      sx={{
                        textAlign: "left",
                        color: "mwOrange",
                        textTransform: "capitalize",
                      }}
                    >
                      {subPage.name.replace("-", " ")}
                    </Typography>
                  </Link>
                </Box>
              </Collapse>
            ))}
        </TransitionGroup>
      </Box>
    </>
  );
};
