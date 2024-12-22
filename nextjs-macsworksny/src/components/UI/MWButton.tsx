import { SxProps, Theme } from "@mui/system";
import Button from "@mui/material/Button";
import Link from "next/link";
import { ButtonPropsColorOverrides } from "@mui/material/Button";

type MWButtonProps = {
  text: string;
  link?: string;
  my?: number;
  styleProps?: SxProps<Theme>;
  type?: "button" | "submit" | "reset";
  color?:
    | keyof ButtonPropsColorOverrides
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning"
    | "mwOrange"
    | "white";
  onclick?: () => void;
};

export const MWButton = ({
  text,
  link,
  color = "mwOrange",
  type,
  onclick,
  styleProps,
  my,
}: MWButtonProps) =>
  link ? (
    <Link href={link}>
      <Button
        color={color}
        variant="contained"
        type={type}
        sx={{ borderRadius: 50, my, ...styleProps }}
      >
        {text}
      </Button>
    </Link>
  ) : (
    <Button
      color={color}
      variant="contained"
      onClick={onclick}
      sx={{ borderRadius: 50, my, ...styleProps }}
    >
      {text}
    </Button>
  );
