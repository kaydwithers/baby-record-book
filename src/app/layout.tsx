import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });

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
      <body className={lora.className}>
        <main className="bg-primary m-4 lg:m-6 border border-black">
          <div className="bg-[#faefdd]">
            <div className="container mx-auto px-6 py-12 lg:px-24 lg:py-24 w-full">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
