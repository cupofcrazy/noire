import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";
import { Providers } from "@/components/providers";
import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/mobile-nav";

const inter = localFont({
  src: "../public/fonts/inter-var.woff2",
  variable: '--font-inter',
  display: 'swap',
  declarations: [
    { prop: 'font-feature-settings', value: "cv10 on" }
  ]
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
        className={`${inter.className} antialiased`}
      >
        <Providers>
          <main className="flex pb-16 md:pb-0" role="main">
            <Sidebar />
            {children}
          </main>
          <MobileNav />
        </Providers>
      </body>
    </html>
  );
}
