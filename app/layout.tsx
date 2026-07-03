import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import WhatsAppButton from "@/components/WhatsAppButton";

// One family, two weights — per brand direction (500 body / 800 display).
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} Weight Gainer — ${siteConfig.price} | Free Delivery, Cash on Delivery`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "weight gainer Pakistan",
    "Nutra-4",
    "weight gain supplement Karachi",
    "mass gainer Pakistan",
    "cash on delivery supplement",
    "muscle building supplement Pakistan",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  // Explicitly override the old site's noindex,nofollow.
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} Weight Gainer — ${siteConfig.price}`,
    description: siteConfig.description,
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Nutra-4 weight gainer box",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} Weight Gainer — ${siteConfig.price}`,
    description: siteConfig.description,
    images: ["/images/og-cover.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#15130F",
  width: "device-width",
  initialScale: 1,
};

function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        url: siteConfig.url,
        logo: `${siteConfig.url}/images/logo.png`,
        image: `${siteConfig.url}/images/logo.png`,
        telephone: siteConfig.phones[0].label,
        email: siteConfig.email,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Karachi",
          addressCountry: "PK",
        },
        sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
      },
      {
        "@type": "Product",
        "@id": `${siteConfig.url}/#product`,
        name: `${siteConfig.name} Weight Gainer`,
        image: `${siteConfig.url}/images/product-box-front.jpg`,
        description: siteConfig.description,
        brand: { "@type": "Brand", name: siteConfig.name },
        offers: {
          "@type": "Offer",
          url: siteConfig.url,
          priceCurrency: siteConfig.currency,
          price: siteConfig.priceNumeric,
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-PK" className={manrope.variable}>
      <body className="font-sans">
        <JsonLd />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
