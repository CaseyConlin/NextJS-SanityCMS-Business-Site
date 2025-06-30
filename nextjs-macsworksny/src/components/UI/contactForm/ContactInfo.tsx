import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import TextsmsIcon from "@mui/icons-material/Textsms";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

type ContactInfoProps = {
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "action"
    | "disabled"
    | "error"
    | "info"
    | "success"
    | "warning"
    | "mwOrange"
    | "white"
    | undefined;
  fontColor?:
    | "inherit"
    | "initial"
    | "primary"
    | "secondary"
    | "textPrimary"
    | "textSecondary"
    | "error"
    | "black"
    | "white"
    | undefined;
  orientation?: "row" | "column";
  sizing?: "small" | "medium" | "large";
  spacing?: "small" | "medium" | "large";
};

export const ContactInfo = ({
  color = "mwOrange",
  orientation = "row",
  fontColor = "black",
  sizing = "small",
  spacing = "small",
}: ContactInfoProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: { xs: "flex", md: "grid" },
        flexDirection: "column",
        alignItems: "center",
        gridTemplateColumns:
          orientation === "row" ? "repeat(4, 1fr)" : "repeat(1, 1fr)",
        columnGap: 2,
        rowGap: {
          xs: 1,
          md: orientation === "row" ? 2 : spacing === "large" ? 3 : 0,
        },
      }}
    >
      <Box
        sx={{
          gridRow: "1",
          gridColumn: orientation === "row" ? "1/2" : "1/5",
          display: "flex",
          justifyContent: orientation === "row" ? "flex-end" : "center",
          alignItems: "center",
        }}
      >
        <PhoneIphoneIcon
          color={color}
          sx={{ fontSize: sizing === "large" ? "3rem" : "2rem" }}
        />
        <TextsmsIcon
          color={color}
          sx={{ fontSize: sizing === "large" ? "2.5rem" : "1.75rem" }}
        />
      </Box>
      <Box
        sx={{
          gridRow: orientation === "row" ? "1" : "2",
          gridColumn: orientation === "row" ? "2/5" : "1/5",
          display: "flex",
          justifyContent: orientation === "row" ? "flex-start" : "center",
        }}
      >
        <Link href="tel:8457066905">
          <Typography
            color={fontColor}
            fontWeight={900}
            fontSize={sizing === "large" ? "1.5rem" : "1.125rem"}
          >
            (845) 706-6905
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          gridColumn: orientation === "row" ? "1/2" : "1/5",
          display: "flex",
          justifyContent: orientation === "row" ? "flex-end" : "center",
          px: 1,
          pt: orientation === "row" ? 0 : 2,
        }}
      >
        <EmailIcon
          color={color}
          sx={{ fontSize: sizing === "large" ? "2.5rem" : "1.75rem" }}
        />
      </Box>
      <Box
        sx={{
          gridRow: orientation === "row" ? "2" : "4",
          gridColumn: orientation === "row" ? "2/5" : "1/5",
          display: "flex",
          justifyContent: orientation === "row" ? "flex-start" : "center",
          alignItems: "center",
        }}
      >
        <Link href="mailto: MacsIronWorks@gmail.com">
          <Typography
            color={fontColor}
            fontWeight={900}
            fontSize={sizing === "large" ? "1.5rem" : "1.125rem"}
          >
            MacsIronWorks@gmail.com
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          gridRow: orientation === "row" ? "3" : "5",
          gridColumn: orientation === "row" ? "1/2" : "1/5",
          display: "flex",
          justifyContent: orientation === "row" ? "flex-end" : "center",
          px: 1,
          pt: orientation === "row" ? 0 : 2,
        }}
      >
        <WarehouseIcon
          color={color}
          sx={{ fontSize: sizing === "large" ? "2.5rem" : "1.75rem" }}
        />
      </Box>
      <Box
        sx={{
          gridRow: orientation === "row" ? "3" : "6",
          gridColumn: orientation === "row" ? "2/5" : "1/5",
          display: "flex",
          justifyContent: orientation === "row" ? "flex-start" : "center",
        }}
      >
        <Link
          target="_blank"
          href="https://www.google.com/maps/place/115+Old+Rte+209,+Hurley,+NY+12443/@41.925702,-74.0678683,699m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89dd051983f3df7f:0xc082a9cb8a0fdd7c!8m2!3d41.925702!4d-74.0678683!16s%2Fg%2F11cpmdc8w3?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
        >
          <Typography
            color={fontColor}
            fontWeight={900}
            fontSize={sizing === "large" ? "1.5rem" : "1.125rem"}
          >
            115 Old Rte 209, Hurley, NY
          </Typography>
        </Link>
      </Box>
      <Box
        sx={{
          gridColumn: orientation === "row" ? "1/2" : "1/5",
          display: "flex",
          flexDirection: "row",
          justifyContent: orientation === "row" ? "flex-end" : "center",
          pt: orientation === "row" ? 0 : 2,
        }}
      >
        <Link
          target="blank"
          aria-label="Macs Iron Works Facebook"
          href="https://www.facebook.com/people/Macs-Iron-Works/61572832131229/?_rdr"
        >
          <FacebookIcon
            color={color}
            sx={{ fontSize: sizing === "large" ? "2.5rem" : "1.75rem" }}
          />
        </Link>
        <Link
          target="blank"
          aria-label="Macs Iron Works Instagram"
          href="https://www.instagram.com/macsironworks/"
        >
          <InstagramIcon
            color={color}
            sx={{ fontSize: sizing === "large" ? "2.5rem" : "1.75rem" }}
          />
        </Link>
      </Box>
    </Box>
  );
};
