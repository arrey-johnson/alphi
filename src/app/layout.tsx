import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "ALPHY'S SERVICES LTD | Professional Cleaning Services Wolverhampton",
  description:
    "Professional residential and commercial cleaning services in Wolverhampton, West Midlands. House cleaning, deep cleaning, office cleaning. Call 01902239420.",
  keywords: "cleaning, Wolverhampton, West Midlands, house cleaning, office cleaning, deep cleaning",
  openGraph: {
    title: "ALPHY'S SERVICES LTD - Professional Cleaning",
    description: "Professional residential and commercial cleaning services in Wolverhampton.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
