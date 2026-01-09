import type { Metadata } from "next";
import { Cormorant, EB_Garamond } from "next/font/google";
import "./globals.css";
import "./page-turn.css";
import "./turn.css";

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
  weight: ["400", "500", "600", "700"],
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

