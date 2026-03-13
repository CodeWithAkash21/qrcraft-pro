import React from "react";
import { Download, Upload, QrCode } from "lucide-react";
import ProBanner from "@/components/ProBanner";

export const metadata = {
  title: "Bulk QR Code Generator | QRCraft Pro",
  description: "Generate hundreds of QR codes at once from a CSV file or manual text entry.",
};

export default function BulkGeneratorPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading font-bold mb-4">
          <span className="text-primary neon-text">Bulk</span> QR Generator
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Generate hundreds of QR codes instantly. Upload a CSV file or paste your data, map the columns, and download a ZIP archive containing all your QR codes.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="glass-panel p-6 text-center">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
            <Upload size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2">1. Upload Data</h3>
          <p className="text-foreground/70">Upload a CSV or Excel file containing your URLs, text, or vCard data.</p>
        </div>
        <div className="glass-panel p-6 text-center">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
            <QrCode size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2">2. Customize</h3>
          <p className="text-foreground/70">Set your colors, logo, and design style once. It applies to all generated codes.</p>
        </div>
        <div className="glass-panel p-6 text-center">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
            <Download size={24} />
          </div>
          <h3 className="text-xl font-bold mb-2">3. Download ZIP</h3>
          <p className="text-foreground/70">Get a neat ZIP file containing all your QR codes in high-resolution PNG or SVG.</p>
        </div>
      </div>

      <div className="glass-panel p-8 md:p-12 text-center border-dashed border-2 border-primary/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent z-0"></div>
        <div className="relative z-10 flex flex-col items-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Pro Feature Only</h2>
          <p className="text-lg text-foreground/80 max-w-xl mx-auto mb-8">
            Bulk generation is exclusively available to QRCraft Pro users. Upgrade your account to unlock unlimited batch generation, custom branding, and API access.
          </p>
          <button className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg shadow-[0_0_20px_rgba(var(--primary),0.4)] hover:shadow-[0_0_30px_rgba(var(--primary),0.6)] transition-shadow text-lg group flex items-center gap-2">
            Upgrade to Pro
          </button>
        </div>
      </div>
    </div>
  );
}
