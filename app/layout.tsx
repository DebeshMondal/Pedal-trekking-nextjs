import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // ✅ Import Navbar
import Footer from "@/components/Footer"; // ✅ Add Footer

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pedal Trekking",
  description: "Explore the best trekking destinations with Pedal Trekking.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="relative min-h-screen flex flex-col"> 
          <Navbar /> {/* ✅ Fixed Navbar at the top */}
          <main className="flex-0 pt-1">{children}</main> {/* ✅ Push content down */}


          <Footer /> ✅ Footer at the bottom

        </div>

        
      </body>
    </html>
  );
}
