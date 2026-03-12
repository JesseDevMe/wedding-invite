import type { Metadata } from "next";
import {
  Montserrat,
  Cormorant_Garamond,
  Birthstone_Bounce,
} from "next/font/google";
import "./globals.css";

const monserat = Montserrat({
  variable: "--font-monserat-sans",
  subsets: ["cyrillic"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond-mono",
  subsets: ["cyrillic"],
});

const birthstoneBounce = Birthstone_Bounce({
  variable: "--font-birthstone-bounce",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Приглашение на свадьбу",
  description: "Приглашаем вас на нашу свадьбу",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${monserat.variable} ${cormorantGaramond.variable} ${birthstoneBounce.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
