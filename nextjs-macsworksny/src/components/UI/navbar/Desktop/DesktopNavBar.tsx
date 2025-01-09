import Box from "@mui/material/Box";
import { NavBarButton } from "./NavBarButton";
import { NavBarDropDownButton } from "./NavBarDropDownButton";

type DesktopNavBarProps = {
  anchorElNav: null | HTMLElement;
  handleOpenNavMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleCloseNavMenu: () => void;
  pages: {
    name: string;
    url: string;
    pages?: { name: string; link: string }[];
  }[];
};
export const DesktopNavBar = ({
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu,
  pages,
}: DesktopNavBarProps) => {
  return (
    <Box
      display={{ xs: "none", md: "flex" }}
      justifyContent={"flex-end"}
      alignItems={"end"}
      mr={10}
    >
      {pages.map((page) => (
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
      ))}
    </Box>
  );
};
