import StoreProvider from "@/src/shared/configs/storeProvider";
import { Footer } from "@/src/widgets/footer";
import { Header } from "@/src/widgets/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/src/shared/styles/global.scss';

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
      <StoreProvider>
      <body className={inter.className}>
      <Header/>{children}
      <Footer/>
      </body>
      </StoreProvider>
    </html>
  );
}
