import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "./Navbar/Navbar";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "LFF:  Ambassador's Assembly",
  description: "LFF Ambassador's Assembly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
     
         <Navbar />

        {children}

      <div className="bg-white">
      <p className="flex justify-center  p-4 text-sm text-gray-600">
        &copy; {new Date().getFullYear()} LFF Ambassador's Assembly
      </p>
      </div>
      </body>
    </html>
  );
}
