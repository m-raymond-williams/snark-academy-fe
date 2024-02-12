import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Source_Code_Pro } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});
const scpro = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
});

export const metadata: Metadata = {
  title: "mrw.snark.academy",
  description: "it's a blog. of sorts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${scpro.variable}`}>{children}</body>
    </html>
  );
}
