import type { Metadata } from "next";
import { Syne, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Free QR Code Generator — No Signup | QRCraft",
  description: "Generate QR codes for URL, WiFi, WhatsApp, UPI, vCard & more. Free forever, no watermark, no signup. Download PNG & SVG instantly.",
  openGraph: {
    title: "Free QR Code Generator — No Signup | QRCraft",
    description: "Generate QR codes for URL, WiFi, WhatsApp, UPI, vCard & more. Free forever, no watermark, no signup. Download PNG & SVG instantly.",
    url: "https://qrcraft.app", // Dummy URL
    siteName: "QRCraft Pro",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free QR Code Generator — No Signup | QRCraft",
    description: "Generate QR codes for URL, WiFi, WhatsApp, UPI, vCard & more. Free forever, no watermark, no signup. Download PNG & SVG instantly.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // We'll set the HTML class to just dark mode default
  return (
    <html lang="en" className={`dark ${syne.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
             __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "QRCraft Pro",
              "url": "https://qrcraft.app",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "All",
              "offers": {
                "@type": "Offer",
                "price": "0.00",
                "priceCurrency": "USD"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
             __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is QRCraft really free to use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, our main QR generation features are 100% free with no watermarks and no limits."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do I need to sign up to generate a QR code?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No signup is required. You can generate, customize, and download QR codes instantly as a guest."
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
