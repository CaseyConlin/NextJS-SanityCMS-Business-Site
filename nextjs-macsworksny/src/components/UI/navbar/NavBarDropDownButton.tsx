import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Typography from "@mui/material/Typography";
import Link from "next/link";

type NavBarDropDownButtonProps = {
  page: {
    name: string;
    url: string;
    pages: { name: string; link: string }[];
  };
  anchorElNav: null | HTMLElement;
  handleOpenNavMenu: (event: React.MouseEvent<HTMLButtonElement>) => void;
  handleCloseNavMenu: () => void;
};

export const NavBarDropDownButton = ({
  page,
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu,
}: NavBarDropDownButtonProps) => {
  return (
    <>
      <Button
        color="mwOrange"
        // onMouseEnter={handleOpenNavMenu}
        id={`${page.url}-button`}
        aria-controls={
          anchorElNav?.id == `${page.url}-button`
            ? `${page.url}-menu`
            : undefined
        }
        aria-haspopup="true"
        aria-expanded={
          anchorElNav?.id == `${page.url}-button` ? "true" : undefined
        }
        onClick={handleOpenNavMenu}
        sx={{
          fontSize: "1.125rem",
          my: 2,
          display: "flex",
          color: anchorElNav?.id === `${page.url}-button` ? "#fff" : "mwOrange",
          "&:hover": { color: "white!important" },
        }}
      >
        {page.name.replace("-", " ")}{" "}
        <ArrowDropDownIcon
          sx={{
            transition: "transform 0.3s",
            transform:
              anchorElNav?.id == `${page.url}-button`
                ? "rotate(180deg)"
                : "rotate(0deg)",
          }}
        />
      </Button>

      <Menu
        // open={true}
        onClose={handleCloseNavMenu}
        id={`${page.url}-menu`}
        anchorEl={anchorElNav?.id == `${page.url}-button` ? anchorElNav : null}
        slotProps={{
          paper: {
            style: {
              width: "180px",
              marginTop: "2px",
              color: "#fff",
              backgroundColor: "#000",
            },
          },
        }}
        MenuListProps={{
          "aria-labelledby": `${page.url}-button`,
        }}
        // sx={{
        //   display: { xs: "block", md: "none", color: "red" },
        // }}
        open={anchorElNav?.id == `${page.url}-button`}
      >
        {page.pages.map((subPage) => (
          <MenuItem
            key={`${page.url}-${subPage.link}`}
            onClick={handleCloseNavMenu}
            sx={{
              color: "#fff",
              "&:hover": {
                backgroundColor: "#ff6600",
              },
            }}
          >
            <Link href={`/${page.url}/${subPage.link}`}>
              <Typography
                sx={{
                  textAlign: "center",
                  color: "mwOrange",
                  textTransform: "capitalize",
                }}
              >
                {subPage.name.replace("-", " ")}
              </Typography>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
