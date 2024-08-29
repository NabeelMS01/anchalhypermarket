import type { Metadata } from "next";
import { Inter, Roboto_Flex } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { constructMetaData } from "@/lib/utils";

const googleFont = Roboto_Flex({ subsets: ["latin"] });

export const metadata: Metadata = constructMetaData();


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={googleFont.className}>
      <Providers>
        <Navbar />

        <main>{children}</main> 

        <Footer />
      </Providers>
    </body>
  </html>
  );
}
