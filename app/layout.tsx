import type { Metadata } from "next";
import  packageJson from "@/package.json"
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "@/components/providers";
import { Sidebar } from "@/components/sidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const SITE_NAME = "Noire"

export const metadata: Metadata = {
  title: `${SITE_NAME}`,
  description: "Noire is a personal UI library for React.",
  openGraph: {
    title: `${SITE_NAME}`,
    description: "Noire is a personal UI library for React.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME}`,
    description: "Noire is a personal UI library for React.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        <Providers>
          <main className="flex" role="main">
            <Sidebar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
