import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const cormorant = localFont({
  src: "../assets/fonts/Cormorant-VariableFont_wght.ttf",
  variable: "--font-cormorant",
  display: "swap",
});

const garamond = localFont({
  src: "../assets/fonts/EBGaramond-VariableFont_wght.ttf",
  variable: "--font-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Behnam Rahimpour - Portfolio",
  description: "Behnam Rahimpour Personal portfolio, showcasing abilities, skills, and philosophy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${garamond.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}

