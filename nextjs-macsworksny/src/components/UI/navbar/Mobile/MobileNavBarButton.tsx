import Link from "next/link";
import Button from "@mui/material/Button";

type MobileNavBarButtonProps = {
  page: {
    name: string;
    url: string;
  };
};
export const MobileNavBarButton = ({ page }: MobileNavBarButtonProps) => {
  return (
    <Button
      key={page.url}
      color="mwOrange"
      sx={{
        fontSize: "1.125rem",
        mb: 0,
        pb: 0,
      }}
    >
      <Link href={`/${page.url}`}>{page.name.replace("-", " ")}</Link>
    </Button>
  );
};
