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
    "Alentro Global Services is a leading IT company in Mumbai providing end-to-end IT solutions — IT Infrastructure, AMC, Helpdesk, Cloud Services (AWS, Azure, GCP), Cybersecurity, Network Management, and IT Consulting for businesses across Mumbai and Pan-India.",
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
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}