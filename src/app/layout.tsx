import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "An awesome app built with Next.js and Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        {/* Navbar */}
        <nav className="bg-white shadow-md p-4 flex justify-center gap-6">
          <Link href="/" className="text-blue-600 hover:underline">
            Início
          </Link>
          <Link href="/about" className="text-green-600 hover:underline">
            Sobre
          </Link>
          <Link href="/certificates" className="text-yellow-600 hover:underline">
            Meus Certificados
          </Link>
          <Link href="/contact" className="text-red-600 hover:underline">
            Contato
          </Link>
        </nav>

        {/* Conteúdo da Página */}
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}
