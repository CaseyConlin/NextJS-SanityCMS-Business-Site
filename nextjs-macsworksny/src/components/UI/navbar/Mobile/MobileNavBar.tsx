import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { MobileNavBarDropDownButton } from "./MobileNavBarDropDownButton";
import { MobileNavBarButton } from "./MobileNavBarButton";
import CancelIcon from "@mui/icons-material/Cancel";

type MobileNavBarProps = {
  handleOpenMobileNavMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleCloseNavMenu: () => void;
  mobileAnchorElNav: null | HTMLElement;
  pages: {
    name: string;
    url: string;
    pages?: { name: string; link: string }[];
  }[];
};

export const MobileNavBar = ({
  handleOpenMobileNavMenu,
  handleCloseNavMenu,
  mobileAnchorElNav,
  pages,
}: MobileNavBarProps) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "flex", md: "none" },
        justifyContent: { xs: "center", md: "flex-end" },
      }}
    >
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenMobileNavMenu}
        color="inherit"
      >
        <MenuIcon sx={{ fontSize: "2.5rem" }} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorReference="none"
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(mobileAnchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiMenu-paper": {
            backgroundColor: "#000",
            color: "#fff",
            width: "200px",
            marginTop: "2px",
            right: 0,
          },
        }}
      >
        <IconButton
          aria-label="close menu"
          onClick={handleCloseNavMenu}
          color="inherit"
        >
          <CancelIcon sx={{}} />
        </IconButton>
        {pages.map((page) => (
          <div key={page.url}>
            {page.pages ? (
              <MobileNavBarDropDownButton
                page={page}
                handleCloseNavMenu={handleCloseNavMenu}
              />
            ) : (
              MobileNavBarButton({ page })
            )}
          </div>
        ))}
      </Menu>
    </Box>
  );
};
