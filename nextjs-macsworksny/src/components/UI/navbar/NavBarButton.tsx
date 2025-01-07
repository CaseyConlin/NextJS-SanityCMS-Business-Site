import Link from "next/link";
import Button from "@mui/material/Button";

type NavBarButtonProps = {
  page: {
    name: string;
    url: string;
  };
};
export const NavBarButton = ({ page }: NavBarButtonProps) => {
  return (
    <Button
      key={page.url}
      color="mwOrange"
      sx={{
        fontSize: "1.125rem",
        my: 2,
        display: "flex",
        "&:hover": { color: "white!important" },
      }}
    >
      <Link href={`/${page.url}`}>{page.name.replace("-", " ")}</Link>
    </Button>
  );
};
