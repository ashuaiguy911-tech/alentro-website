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
  metadataBase: new URL("https://alentroglobal.com"),
  title: "Alentro Global Services | IT Solutions India",
  description:
    "Alentro Global Services provides end-to-end IT solutions to businesses across India — IT Infrastructure, AMC, Helpdesk, Cloud Services (AWS, Azure, GCP), Cybersecurity, and more.",
  keywords:
    "IT services India, IT infrastructure, AMC, helpdesk, cloud services, AWS, Azure, cybersecurity, network management, IT consulting",
  authors: [{ name: "Alentro Global Services" }],
  creator: "Alentro Global Services",
  verification: {
    google: "z1mXmW6M_NsHpunXDZk5FRyiHx39_7kCgQwjTvAOpx8",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://alentroglobal.com",
    siteName: "Alentro Global Services",
    title: "Alentro Global Services | IT Solutions India",
    description:
      "End-to-End IT Solutions. Delivered with Excellence. Serving businesses across India.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Alentro Global Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alentro Global Services | IT Solutions India",
    description: "End-to-End IT Solutions. Delivered with Excellence.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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