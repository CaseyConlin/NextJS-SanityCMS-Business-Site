import { PortableText, type SanityDocument } from "next-sanity";
import { SxProps, Theme } from "@mui/system";
import { Typography } from "@mui/material";

type PortableTextProps = {
  text: SanityDocument;
  styleProps?: SxProps<Theme>;
};

export const PortableTextBody = ({ text, styleProps }: PortableTextProps) => {
  return (
    <PortableText
      value={text}
      components={{
        block: {
          normal: ({ children }) => (
            <Typography
              variant="body1"
              py={1}
              sx={{ ...styleProps, a: { color: "#FF6600", fontWeight: 500 } }}
            >
              {children}
            </Typography>
          ),
        },
      }}
    />
  );
};
