"use client";
import { createTheme } from "@mui/material/styles";

// Augment the palette to include a mwOrange color
declare module "@mui/material/styles" {
  interface Palette {
    mwOrange: Palette["primary"];
    white: Palette["primary"];
  }

  interface PaletteOptions {
    mwOrange?: PaletteOptions["primary"];
    white?: PaletteOptions["primary"];
  }
}

// Update the Button's color options to include a mwOrange option
declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    mwOrButton: true;
    white: true;
  }

  interface ButtonPropsColorOverrides {
    mwOrange: true;
    white: true;
  }
}

// declare module "@mui/material/Icon" {
//   interface IconPropsVariantOverrides {
//     mwOrIcon: true;
//   }
//   interface IconPropsColorOverrides {
//     mwOrange: true;
//   }
// }

declare module "@mui/material/SvgIcon" {
  interface SvgIconPropsColorOverrides {
    mwOrange: true;
    white: true;
  }
}
// declare module '@mui/material/Button' {
//     interface ButtonPropsVariantOverrides {
//       dashed: true;
//     }
//   }

// declare module "@mui/material/Typography" {
//   interface TypographyPropsColorOverrides {
//     mwOrange: true;
//   }
// }

let theme = createTheme({
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  //   components: {
  //     MuiButton: {
  //       variants: [
  //         {
  //           props: { variant: "mwOrButton" },
  //           style: {
  //             textTransform: "uppercase",
  //             fontWeight: 700,
  //             color: "black",
  //           },
  //         },
  //       ],
  //     },
  //   },
  //   palette: {
  //     primary: {
  //       main: "#000", // Your primary color
  //     },
  //     secondary: {
  //       main: "#F66A1F", // Your secondary color
  //     },
  //   },
});

theme = createTheme(theme, {
  // Custom colors created with augmentColor go here
  palette: {
    mwOrange: theme.palette.augmentColor({
      color: {
        main: "#F66A1F",
      },
      name: "mwOrange",
    }),
    white: theme.palette.augmentColor({
      color: {
        main: "#fff",
      },
      name: "white",
    }),
  },
});

export default theme;
