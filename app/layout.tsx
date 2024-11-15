import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "../public/css/base.css"
import "../public/css/fonts.css"
import "../public/css/vendor.css"
import "../public/css/main.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Suspense } from "react";
import Loading from "./loading";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",

};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header></Header>
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer></Footer>
      </body>

    </html>
  );
}
