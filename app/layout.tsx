import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

// Load Inter font globally
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Ensures better performance
});

export const metadata: Metadata = {
  title: "Your App Title",
  description: "Your App Description",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}> {/* Apply font globally */}
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
