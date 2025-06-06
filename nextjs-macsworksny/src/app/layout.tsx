import { Roboto } from "next/font/google";
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme";
import Navbar from "../components/UI/navbar/NavBar";
import { Footer } from "../components/Footer";
import { ContactFooterContainer } from "@/components/UI/contactFooter/ContactFooterContainer";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Macs Iron Works",
  description:
    "Steel services in Hudson Valley, NY: bridges, staircases, ornamental railings, structural steel buildings. Trusted in Kingston, Beacon, Poughkeepsie & beyond!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
      <body className={roboto.className} style={{ backgroundColor: "black" }}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Navbar />
            {children}
            <ContactFooterContainer />
            <Footer />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
