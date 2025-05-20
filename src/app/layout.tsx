import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar"
import Footer from "@/components/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carmel Polytechnic Collage",
  description: "Carmel Polytechnic College was established in 1958 by Very Rev. Fr. Gilbert Palakunnel CMI and is managed by CMI Fathers - a priestly order reputed for their contributions in the field of education and healthcare. The institution draws spiritual inspiration from St. Kuriakose Elias Chavara",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
      <div className="bg-carmel-dark text-white py-1 px-4 flex justify-between items-center text-sm">
        <div className="flex items-center space-x-6">
          <span className="flex items-center">📞 0477 2288 825</span>
          <span className="flex items-center">✉️ info@carmelpoly.in</span>
        </div>
        <div>
          <a href="/staff" className="hover:underline">STAFF SIGN IN</a>
        </div>
      </div>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
      </body>
    </html>
  );
}
