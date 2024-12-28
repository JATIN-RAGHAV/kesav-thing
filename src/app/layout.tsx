import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./ui/Navbar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./ui/Footer";
import CategoryBar from "./ui/CategoryBar";
import { GlobalProvider } from "@/app/GlobalProvider";
import ToastProvider from "@/app/providers/toast-provider";

export const metadata: Metadata = {
  title: "GuptaSwitchGear",
  description: "Generated by Keshav",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png+xml" sizes="90x90" href="/headlogo.png" />
      </head>
      <body className="overflow-x-hidden">
        <div>
          <GlobalProvider>
            <Navbar />
            <CategoryBar />
            <ToastProvider />
            {children}
            <Footer />
          </GlobalProvider>
        </div>
      </body>
    </html>
  );
}
