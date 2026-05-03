import type { Metadata } from "next";
import { Geist, Geist_Mono, Bungee } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bungee = Bungee({
  variable: "--font-bungee",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Karandeep Singh — Portfolio",
  description: "An interactive lofi room showcasing my work in machine learning, computer vision, and full-stack development!",
  openGraph: {
    title: "Karandeep Singh — Portfolio",
    description: "An interactive lofi room showcasing my work in machine learning, computer vision, and full-stack development!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bungee.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
