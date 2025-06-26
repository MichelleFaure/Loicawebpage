import { Metadata } from "next";

import Navcomp from "@/components/Navcomp";
import { cormorant } from "./fonts/fonts";
import "./globals.css";
import Footercomp from "@/components/Footercomp";


export const metadata: Metadata = {
  title: "Centro Loica",
  description:
    "Psicoterapia y terapia sexológica desde una mirada humanista, feminista, con perspectiva de derechos y de género. Presencia en Chile y España",
  keywords:
    "psicología, sexología, psicoterapia, terapia sexológica, atención psicológica online, salud mental, feminismo, perspectiva de género, terapia en Chile, terapia en España, terapia internacional, cursos y talleres",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Centro Loica",
    description:
      "Psicoterapia y terapia sexológica desde una mirada humanista, feminista, con perspectiva de derechos y de género. Presencia en Chile y España",
    url: "https://www.centroloica.com",
    siteName: "Centro Loica",
    images: [
      {
        url: "https://www.centroloica.com/layout/logoLoica.png",
        width: 1200,
        height: 675,
        alt: "Centro Loica Logo",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="canonical" href="https://www.centroloica.com/" />
        <meta
          name="description"
          content="Psicoterapia y terapia sexológica desde una mirada humanista, feminista, con perspectiva de derechos y de género. Presencia en Chile y España"
        ></meta>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Centro Loica",
              description:
                "Psicoterapia y terapia sexológica desde una mirada humanista, feminista, con perspectiva de derechos y de género. Presencia en Chile y España",
              url: "https://www.centroloica.com/",
              logo: "https://www.centroloica.com/layout/logoLoica.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+56 9 5772 9169",
                contactType: "customer service",
                areaServed: "Worldwide",
                availableLanguage: ["Spanish"],
              },
              sameAs: [
                "https://www.instagram.com/centro.loica/",
                "https://www.linkedin.com/company/centroloica",
              ],
            }),
          }}
        />
      </head>

      <body className={`${cormorant.className} antialiased bg-lavender-bg`}>
        <Navcomp></Navcomp>
        <main>{children}</main>
        <Footercomp></Footercomp>
      </body>
    </html>
  );
}
