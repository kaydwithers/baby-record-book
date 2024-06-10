import { Inter, Lora } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext/ThemeContext";
import "./globals.css";

import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baby Record Book",
  description: "For precious memories of your baby's first year",
  metadataBase: new URL("https://baby-record-book.vercel.app/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={lora.className}>
        <main className="m-4 lg:m-6 border border-current">
          <div className="container mx-auto px-6 py-12 lg:px-24 lg:py-24 w-full">
            <ThemeProvider>{children}</ThemeProvider>
          </div>
        </main>
      </body>
    </html>
  );
}
