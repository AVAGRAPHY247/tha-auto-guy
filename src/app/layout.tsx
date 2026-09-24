import type { Metadata, Viewport } from "next";
import "./globals.css";
import RouteLoaderMount from "@/components/loading/RouteLoaderMount";
export const metadata: Metadata = {
  title: {
    default: "Tha Auto Guy | AI Automation Specialist",
    template: "%s | Tha Auto Guy",
  },
  description:
    "Tha Auto Guy helps businesses save time, reduce manual work, and improve customer experiences using AI and automation.",
  keywords: [
    "AI Automation Specialist",
    "Business Automation",
    "ChatGPT Automation",
    "Workflow Automation",
    "WhatsApp Automation",
  ],
  openGraph: {
    title: "Tha Auto Guy | AI Automation Specialist",
    description:
      "Turning repetitive work into automated systems for businesses.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tha Auto Guy | AI Automation Specialist",
    description:
      "Turning repetitive work into automated systems for businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#070707",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-bg-900 text-foreground antialiased">
  {children}
  <RouteLoaderMount />
</body>
    </html>
  );
}