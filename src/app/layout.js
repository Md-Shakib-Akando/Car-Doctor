import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import NextAuth from "@/Providers/NextAuth";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'My Car Parts Shop',
  description: 'Best Car Parts Online Store'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo.svg" />
        <title>My Car Parts Shop</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <NextAuth>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </NextAuth>

      </body>
    </html>
  );
}
