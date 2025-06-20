import type { Metadata } from "next";
import { Geist, Geist_Mono, Manrope as ManropeFont } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const Manrope = ManropeFont({
  subsets: ['latin'],
  weight: ['300','400', '500', '600', '700'], // Optional: specify weights
  display: 'swap',               // Recommended for better performance
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${Manrope.className} bg-white`}
      >
        <div className="bg-black w-full h-full scroll-smooth">
        <Header/>
        <ToastContainer/>
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}
