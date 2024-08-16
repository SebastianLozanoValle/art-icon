import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../globals.css";
import { AuthSlider } from "@/components/AuthSlider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ArtIcon",
  description: "Tienda Oficial ArtIcon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="bg-slate-900">
          <div className="min-h-screen h-auto relative flex">
              <AuthSlider />
              {children}
          </div>
        </div>
      </body>
    </html>
  );
}
