import type { Metadata } from "next";
import { Bebas_Neue, Cairo } from "next/font/google";
import "./globals.css";

const Bebas_Neue_Font = Bebas_Neue(
  {
    subsets: ["latin-ext"],
    weight: ['400']

  }
);

const Cairo_Font = Cairo(
  {
    subsets: ["latin"],
    weight: ['200', '300', '400', '500', '600', '700', '800']

  }
);

export const metadata: Metadata = {
  title: "Watchme App",
  description: "Your favorite movies and series in one place",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Bebas_Neue_Font.className} bg-body`}>
        <div id="page-content" className="page-content">
          {children}
        </div>
      </body>
    </html>
  );
}
