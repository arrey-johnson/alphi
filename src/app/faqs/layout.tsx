import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | ALPHY'S SERVICES LTD",
  description: "Frequently asked questions about our cleaning services in Wolverhampton.",
};

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
