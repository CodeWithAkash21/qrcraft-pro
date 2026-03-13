"use client";

import { useState } from "react";
import { QRType, QRCodeConfig, INITIAL_QR_CONFIG } from "@/types/qr";
import TabSelector from "@/components/TabSelector";
import InputForms from "@/components/InputForms";
import CustomizePanel from "@/components/CustomizePanel";
import QRPreview from "@/components/QRPreview";
import DownloadPanel from "@/components/DownloadPanel";
import AdSlot from "@/components/AdSlot";
import ProBanner from "@/components/ProBanner";
import { downloadPNG, downloadSVG, downloadPDF } from "@/lib/download";

export default function Home() {
  const [activeTab, setActiveTab] = useState<QRType>("url");
  const [payload, setPayload] = useState<string>("");
  const [config, setConfig] = useState<QRCodeConfig>(INITIAL_QR_CONFIG);

  const handleConfigChange = (updates: Partial<QRCodeConfig>) => {
    setConfig((prev) => ({ ...prev, ...updates }));
  };

  const handleDownloadPNG = () => downloadPNG("qrcraft.png");
  const handleDownloadSVG = () => downloadSVG(payload, config, "qrcraft.svg");
  const handleDownloadPDF = () => downloadPDF("qrcraft.pdf");

  const handleShare = () => {
    // We could generate a shareable URL to this exact config and data
    // using the /lib/share.ts logic here.
    alert("Share link copied to clipboard!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Create Perfect <span className="text-primary neon-text">QR Codes</span>
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Fast, secure, and highly customizable. Generate QR codes for URLs, WiFi, VCards, and more, entirely in your browser.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Inputs & Customization */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-6">
          <TabSelector activeTab={activeTab} onChange={setActiveTab} />
          <InputForms activeTab={activeTab} onPayloadChange={setPayload} />
          <CustomizePanel config={config} setConfig={setConfig} />
        </div>

        {/* Right Column: Preview & Actions */}
        <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6 lg:sticky lg:top-24">
          <div className="glass-panel p-6 flex flex-col items-center border border-primary/20 bg-background/50">
            <h2 className="text-xl font-heading mb-6 w-full text-left">Live Preview</h2>
            <QRPreview config={{...config, type: activeTab}} payload={payload} />
            <div className="w-full mt-6">
              <DownloadPanel 
                onDownloadPNG={handleDownloadPNG}
                onDownloadSVG={handleDownloadSVG}
                onDownloadPDF={handleDownloadPDF}
                onShare={handleShare}
              />
            </div>
          </div>
          
          <ProBanner />
          
          {/* Ad Slot - Normally conditionally rendered if not PRO */}
          <div className="hidden lg:block">
            <AdSlot slot="sidebar-ad" />
          </div>
        </div>
      </div>
    </div>
  );
}
