import { Roboto } from "next/font/google";
import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";

// import localFont from "next/font/local";
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

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

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
      <body className={roboto.className} style={{ backgroundColor: "black" }}>
        {/* className={`${geistSans.variable} ${geistMono.variable} antialiased`} */}
        {/* > */}
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
