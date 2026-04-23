import type { Metadata } from "next";
import { Playfair_Display, EB_Garamond, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
});

const baskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-baskerville",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://acomplexo.com.br"),
  title: {
    default: "AComplexo — Monetize seu talento",
    template: "%s | AComplexo",
  },
  description:
    "Agência de conteúdo para profissionais liberais e influenciadores. Transformamos seu conhecimento em autoridade digital e monetização real.",
  keywords: [
    "agência de conteúdo",
    "marketing digital",
    "profissionais liberais",
    "curso online",
    "monetização digital",
    "influenciadores",
    "funil de vendas",
  ],
  authors: [{ name: "AComplexo", url: "https://acomplexo.com.br" }],
  creator: "AComplexo",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://acomplexo.com.br",
    siteName: "AComplexo",
    title: "AComplexo — Monetize seu talento",
    description:
      "Agência de conteúdo para profissionais liberais e influenciadores. Do planejamento ao lucro.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "AComplexo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AComplexo — Monetize seu talento",
    description: "Agência de conteúdo para profissionais liberais e influenciadores.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AComplexo",
  url: "https://acomplexo.com.br",
  logo: "https://acomplexo.com.br/og-image.jpg",
  email: "contato@acomplexo.com.br",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-27-99689-8175",
    contactType: "customer service",
    availableLanguage: "Portuguese",
  },
  address: { "@type": "PostalAddress", addressCountry: "BR" },
  description:
    "Agência de conteúdo para profissionais liberais e influenciadores. Transformamos expertise em autoridade digital e monetização.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${garamond.variable} ${baskerville.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
