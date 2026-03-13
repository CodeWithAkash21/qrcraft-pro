import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | QRCraft Pro",
  description: "Privacy policy for QRCraft Pro - a privacy-first QR code generator.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight mb-8">
        Privacy <span className="text-primary">Policy</span>
      </h1>
      
      <div className="prose prose-invert prose-green max-w-none">
        <p className="text-lg text-foreground/80 mb-8">
          Last updated: March 13, 2026
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 font-heading text-white">1. We Don't Store Your Data</h2>
          <p className="text-foreground/80 mb-4">
            At QRCraft Pro, your privacy is our top priority. We do not store, save, or transmit the content of your QR codes to our servers.
          </p>
          <p className="text-foreground/80 mb-4">
            All QR code generation happens <strong>100% locally in your browser</strong>. When you type text, upload a WiFi password, or create a VCard, that information mathematically transforms into a QR code on your device and never leaves it.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 font-heading text-white">2. Analytics and Cookies</h2>
          <p className="text-foreground/80 mb-4">
            While we don't track your QR code content, we do use standard website analytics to understand our traffic. We also use Google AdSense to display advertisements that help keep QRCraft Pro free.
          </p>
          <p className="text-foreground/80 mb-4">
            Google AdSense may use cookies to serve ads based on your prior visits to our website or other websites on the Internet. You can opt out of personalized advertising by visiting <a href="https://myadcenter.google.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Ads Settings</a>.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 font-heading text-white">3. Third-Party Links</h2>
          <p className="text-foreground/80 mb-4">
            Our website may contain links to third-party websites. We have no control over the content and privacy practices of those sites. We encourage you to read their privacy policies.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 font-heading text-white">4. Contact Us</h2>
          <p className="text-foreground/80 mb-4">
            If you have any questions about this Privacy Policy, you can contact us at:
          </p>
          <a href="mailto:hello@qrcraft.app" className="inline-flex items-center justify-center px-6 py-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors text-white font-medium">
            hello@qrcraft.app
          </a>
        </section>
      </div>
    </div>
  );
}
