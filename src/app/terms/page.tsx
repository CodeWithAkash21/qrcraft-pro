import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | QRCraft Pro",
  description: "Terms of Service for using QRCraft Pro.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight mb-8">
        Terms of <span className="text-primary">Service</span>
      </h1>
      
      <div className="prose prose-invert prose-green max-w-none">
        <p className="text-lg text-foreground/80 mb-8">
          Last updated: March 13, 2026
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 font-heading text-white">1. Acceptance of Terms</h2>
          <p className="text-foreground/80 mb-4">
            By accessing and using QRCraft Pro, you accept and agree to be bound by the terms and provisions of this agreement.
          </p>
          <p className="text-foreground/80 mb-4">
            QRCraft Pro is provided free of charge and does not require you to create an account.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 font-heading text-white">2. User Responsibility</h2>
          <p className="text-foreground/80 mb-4">
            You are entirely responsible for the content, URLs, and data you encode into QR codes using our service. We do not monitor or verify the content encoded in the QR codes.
          </p>
          <p className="text-foreground/80 mb-4">
            You agree not to use QRCraft Pro to generate QR codes that link to malware, phishing sites, illegal content, or anything that violates applicable laws.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 font-heading text-white">3. Commercial Use</h2>
          <p className="text-foreground/80 mb-4">
            The QR codes generated on QRCraft Pro can be used for both personal and commercial purposes. We do not claim ownership of the QR codes you generate. Once downloaded, they are yours to print, publish, and distribute.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 font-heading text-white">4. Disclaimer of Warranties</h2>
          <p className="text-foreground/80 mb-4">
            We provide QRCraft Pro "as is" and without any warranty or condition, express, implied, or statutory. We specifically disclaim any implied warranties of merchantability, fitness for a particular purpose, non-infringement, information accuracy, integration, interoperability, or quiet enjoyment.
          </p>
          <p className="text-foreground/80 mb-4">
            We do not guarantee that the service will be uninterrupted, secure, or error-free. 
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4 font-heading text-white">5. Limitation of Liability</h2>
          <p className="text-foreground/80 mb-4">
            In no event shall QRCraft Pro, its officers, directors, employees, or agents, be liable to you for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever resulting from your use of the service or the QR codes generated.
          </p>
        </section>
      </div>
    </div>
  );
}
