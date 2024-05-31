import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-primary p-4 lg:p-24">
          <div className="bg-white rounded-2xl px-4 py-12 lg:p-24">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
