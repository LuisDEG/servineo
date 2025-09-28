import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "@/components/layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Servineo - Servicios de Reparación y Mantenimiento",
  description: "Conectamos a personas con servicios de reparación y mantenimiento de calidad en su área local.",
  keywords: "servicios, reparación, mantenimiento, plomería, electricidad, carpintería, pintura, limpieza, jardinería",
  authors: [{ name: "Servineo Team" }],
  creator: "Servineo",
  publisher: "Servineo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  openGraph: {
    title: "Servineo - Servicios de Reparación y Mantenimiento",
    description: "Conectamos a personas con servicios de reparación y mantenimiento de calidad en su área local.",
    url: "/",
    siteName: "Servineo",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servineo - Servicios de Reparación y Mantenimiento",
    description: "Conectamos a personas con servicios de reparación y mantenimiento de calidad en su área local.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/images/icons/favicon.ico",
    shortcut: "/images/icons/favicon.ico",
    apple: "/images/icons/pwa-icons/icon-192x192.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased bg-gray-50">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
