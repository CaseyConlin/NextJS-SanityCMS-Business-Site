import Typography from "@mui/material/Typography";
import { SxProps, Theme } from "@mui/system";

type MWHeadingProps = {
  text: string;
  component: React.ElementType;
  fontWeight?: number;
  fontSize?: string;
  color?: string;
  styleProps?: SxProps<Theme>;
  icon?: React.ReactNode;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | undefined;
};
export const MWHeading = ({
  text,
  fontWeight = 900,
  fontSize = "2.25rem",
  variant,
  component,
  color,
  icon,
  styleProps,
}: MWHeadingProps) => {
  return (
    <>
      <Typography
        variant={variant}
        component={component}
        fontFamily={"Roboto"}
        fontWeight={fontWeight}
        fontSize={fontSize}
        color={color}
        sx={
          icon
            ? {
                display: "flex",
                alignItems: "center",
                "& svg": { fontSize: "1.75rem", mr: 1 },
                ...styleProps,
              }
            : { ...styleProps }
        }
      >
        {icon && icon}
        {text}
      </Typography>
    </>
  );
};
