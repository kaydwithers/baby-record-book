import { Inter, Lora } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext/ThemeContext";
import "./globals.css";

import type { Metadata } from "next";
import { Header } from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });
const lora = Lora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baby Record Book",
  description: "For precious memories of your baby's first year",
  metadataBase: new URL("https://baby-record-book.vercel.app/"),
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${lora.className} bg-secondary dark:bg-primary text-primary dark:text-secondary`}
      >
        <main className="m-4 lg:m-6 border border-current min-h-screen">
          <div className="container mx-auto px-6 py-12 lg:px-24 lg:py-24 w-full">
            <ThemeProvider>
              <Header />
              {children}
            </ThemeProvider>
          </div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
