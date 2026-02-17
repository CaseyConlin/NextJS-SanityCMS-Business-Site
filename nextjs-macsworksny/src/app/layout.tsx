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
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: process.env.SITE_URL
    ? new URL(process.env.SITE_URL)
    : new URL("https://macsworksny.com"),
  title: "Macs Iron Works Hudson Valley, NY | Steel Services & Fabrication",
  description:
    "Steel services in Hudson Valley, NY: staircases, ornamental railings, structural steel buildings. Trusted in Kingston, Beacon, Poughkeepsie & beyond!",
  alternates: {
    canonical: process.env.SITE_URL
      ? process.env.SITE_URL
      : "https://macsworksny.com",
  },
  openGraph: {
    title: "Macs Iron Works Hudson Valley, NY | Steel Services & Fabrication",
    description:
      "Steel services in Hudson Valley, NY: staircases, ornamental railings, structural steel buildings. Trusted in Kingston, Beacon, Poughkeepsie & beyond!",
    url: process.env.SITE_URL
      ? process.env.SITE_URL
      : "https://macsworksny.com",
    siteName: "Macs Iron Works",
    images: [
      {
        url: "/macs-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Macs Iron Works Logo",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Macs Iron Works Hudson Valley, NY | Steel Services & Fabrication",
    description:
      "Steel services in Hudson Valley, NY: staircases, ornamental railings, structural steel buildings. Trusted in Kingston, Beacon, Poughkeepsie & beyond!",
    images: ["/macs-og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID as string} />
      <body
        className={`${roboto.variable} ${roboto.className}`}
        style={{ backgroundColor: "black" }}
      >
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
