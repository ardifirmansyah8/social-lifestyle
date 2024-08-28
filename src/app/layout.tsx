import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";

import { Toaster } from "@/components/ui/toaster";
import Layout from "@/components/Layout";
import ReactQueryProvider from "@/components/Provider/ReactQueryProvider";

import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social Lifestyle",
  description: "Microsite for social lifestyle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <ReactQueryProvider>
          <Layout>{children}</Layout>
        </ReactQueryProvider>
        <Toaster />
      </body>
    </html>
  );
}
