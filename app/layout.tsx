import { Metadata } from "next";

import Navcomp from "@/components/Navcomp";
import { cormorant } from "./fonts/fonts";
import "./globals.css";
import Footercomp from "@/components/Footercomp";


export const metadata: Metadata = {
  title: "Centro Loica",
  description: "Centro de Psicología y Sexología Loica",
  keywords:
    "Psicología , Sexología, atención psicológica y sexológica, Atención online",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body
        className={`${cormorant.className} antialiased bg-lavender-bg`}
      >
        <Navcomp></Navcomp>
        <main>{children}</main>
        <Footercomp></Footercomp>
      </body>
    </html>
  );
}
