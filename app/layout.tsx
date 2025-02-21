import type { Metadata } from "next";
import { Inknut_Antiqua } from "next/font/google";
import "./globals.css";

const inknutAntiqua = Inknut_Antiqua({
  variable: "--font-inknut-antiqua",
  subsets: ["latin"],
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  title: "Fullstack Web Developer - Psycholess",
  description: "Experienced Web Developer's personal page for recruiters and others",
  keywords: ['web', 'fullstack', 'developer', 'react', 'next.js', 'typescript', 'javascript'],
  applicationName: 'Psycholess',

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inknutAntiqua.variable}`}>
        {children}
      </body>
    </html>
  );
}
