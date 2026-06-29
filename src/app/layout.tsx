import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChatWidget } from "@/components/chat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alentro-website.vercel.app"),
  title: {
    default: "Alentro Global Services | IT Company Mumbai & India",
    template: "%s | Alentro Global Services",
  },
  description:
    "Alentro Global Services: trusted IT company in Mumbai since 2014. IT infrastructure, cloud, cybersecurity, AMC & helpdesk for businesses across India.",
  keywords:
    "IT company Mumbai, IT services Mumbai, IT support Mumbai, IT infrastructure Mumbai, AMC Mumbai, helpdesk Mumbai, cloud services Mumbai, cybersecurity Mumbai, IT consulting Mumbai, managed IT services India, IT solutions India, IT outsourcing Mumbai, network management Mumbai, cloud migration Mumbai, data backup Mumbai, IT audit Mumbai, AWS Azure GCP India, SME IT support Mumbai",
  authors: [{ name: "Alentro Global Services" }],
  creator: "Alentro Global Services",
  alternates: {
    canonical: "https://alentro-website.vercel.app",
  },
  verification: {
    google: "z1mXmW6M_NsHpunXDZk5FRyiHx39_7kCgQwjTvAOpx8",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://alentro-website.vercel.app",
    siteName: "Alentro Global Services",
    title: "Alentro Global Services | IT Company Mumbai & India",
    description:
      "End-to-End IT Solutions for businesses in Mumbai & across India. IT Infrastructure, Cloud, Cybersecurity, AMC, Helpdesk & more.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alentro Global Services — IT Company Mumbai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alentro Global Services | IT Company Mumbai & India",
    description:
      "End-to-End IT Solutions for businesses in Mumbai & across India.",
    images: ["/og-image.png"],
    site: "@alentroglobal",
    creator: "@alentroglobal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai, Maharashtra, India",
    "geo.position": "19.0760;72.8777",
    ICBM: "19.0760, 72.8777",
    // Replace with code from https://www.bing.com/webmasters
    "msvalidate.01": "BING_VERIFICATION_CODE_HERE",
    "indexnow-key": "11d4d6abab7b4ccabe5fee628da8df94",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://alentro-website.vercel.app/#website",
  name: "Alentro Global Services",
  url: "https://alentro-website.vercel.app",
  description:
    "IT company in Mumbai providing IT infrastructure, cloud services, cybersecurity, AMC, helpdesk and IT consulting.",
  publisher: {
    "@id": "https://alentro-website.vercel.app/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://alentro-website.vercel.app/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}