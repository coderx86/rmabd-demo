import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "RMA",
  description: "Official website of RoboMechatronics Association at CUET",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "RoboMechatronics Association - CUET",
    description: "Official website of RoboMechatronics Association at CUET",
    url: "https://rma.vercel.app", // Replace with your actual domain
    siteName: "RoboMechatronics Association",
    images: [
      {
        url: "/logo/RMA logo.jpg", // Default image for previews
        width: 1200,
        height: 630,
        alt: "RoboMechatronics Association Event",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body className="theme-transition overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          <div className="overflow-x-hidden w-full">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
