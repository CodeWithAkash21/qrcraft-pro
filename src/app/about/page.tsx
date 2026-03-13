import { Metadata } from "next";
import { Zap, Shield, Sparkles, Code2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | QRCraft Pro",
  description: "Learn about QRCraft Pro, the fastest, privacy-first QR code generator built for the modern web.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight mb-6">
          About <span className="text-primary">QRCraft Pro</span>
        </h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          We believe creating high-quality QR codes should be free, fast, and completely private.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-surface border border-border rounded-xl p-8 hover:border-primary/50 transition-colors">
          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6">
            <Shield size={24} />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white font-heading">100% Browser Based</h3>
          <p className="text-foreground/70">
            Unlike other generators that send your data to remote servers, QRCraft Pro generates QR codes entirely in your browser. Your data never leaves your device, guaranteeing absolute privacy.
          </p>
        </div>

        <div className="bg-surface border border-border rounded-xl p-8 hover:border-primary/50 transition-colors">
          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6">
            <Zap size={24} />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white font-heading">No Limits or Watermarks</h3>
          <p className="text-foreground/70">
            We don't hold your QR codes hostage. There are no scan limits, no mandatory signups, no hidden fees, and absolutely no watermarks on your downloaded codes.
          </p>
        </div>

        <div className="bg-surface border border-border rounded-xl p-8 hover:border-primary/50 transition-colors">
          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6">
            <Sparkles size={24} />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white font-heading">Built for India & the World</h3>
          <p className="text-foreground/70">
            From students building their first portfolios to freelancers and local businesses setting up UPI payments, QRCraft Pro is a reliable tool that just works.
          </p>
        </div>

        <div className="bg-surface border border-border rounded-xl p-8 hover:border-primary/50 transition-colors">
          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6">
            <Code2 size={24} />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white font-heading">Free Forever</h3>
          <p className="text-foreground/70">
            Our mission is simple: provide the best QR code generation experience on the internet, for free. We support the site through unintrusive display ads.
          </p>
        </div>
      </div>

      <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold mb-6 font-heading text-white">Ready to create?</h2>
        <p className="text-lg text-foreground/70 mb-8 max-w-xl mx-auto">
          Generate URL, WiFi, VCard, Crypto, and UPI QR codes in seconds.
        </p>
        <Link href="/" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-black font-bold rounded-lg hover:bg-primary/90 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,255,157,0.4)]">
          Go to Generator
        </Link>
      </div>
    </div>
  );
}
