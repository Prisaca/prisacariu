import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import localFont from "next/font/local";

// Font files can be colocated inside of `app`
const Monument = localFont({
  src: "./Monument_Regular.woff2",
  display: "swap",
  variable: "--font-monument",
});

export const metadata: Metadata = {
  title: "Sebastian Prisacariu",
  description: "Developer, Designer, and Brand Strategist",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${Monument.variable}`}>
      <body
        className={`bg-background text-foreground dark pt-6`}
        style={{ paddingInline: "var(--page-padding-x)" }}
      >
        {children}
      </body>
    </html>
  );
}
