"use client";

import { QRCodeConfig } from "@/types/qr";
import { PaintBucket, ShieldCheck, Image as ImageIcon, SlidersHorizontal, Settings2 } from "lucide-react";
import { useState, useRef } from "react";

export default function CustomizePanel({
  config,
  setConfig,
}: {
  config: QRCodeConfig;
  setConfig: React.Dispatch<React.SetStateAction<QRCodeConfig>>;
}) {
  const [activeSection, setActiveSection] = useState<string | null>("colors");
  const logoInputRef = useRef<HTMLInputElement>(null);

  const toggleSection = (id: string) => setActiveSection(activeSection === id ? null : id);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setConfig(c => ({ ...c, logoImage: event.target!.result as string }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col gap-4 mt-6">
      <h3 className="text-xl font-heading flex items-center gap-2 mb-2">
        <Settings2 size={24} className="text-primary" />
        Design & Customization
      </h3>
      
      {/* Colors Section */}
      <div className="glass-panel overflow-hidden">
        <button 
          onClick={() => toggleSection("colors")}
          className="w-full flex items-center justify-between p-4 font-medium hover:bg-white/5 transition-colors"
        >
          <span className="flex items-center gap-2"><PaintBucket size={18} /> Colors</span>
          <span>{activeSection === "colors" ? "−" : "+"}</span>
        </button>
        {activeSection === "colors" && (
          <div className="p-4 pt-0 border-t border-border grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-foreground/70 mb-2">Foreground</label>
              <div className="flex gap-2 items-center">
                <input 
                  type="color" 
                  value={config.fgColor} 
                  onChange={(e) => setConfig({ ...config, fgColor: e.target.value })}
                  className="w-10 h-10 rounded cursor-pointer bg-transparent border-0 p-0"
                />
                <input 
                  type="text" 
                  value={config.fgColor} 
                  onChange={(e) => setConfig({ ...config, fgColor: e.target.value })}
                  className="bg-background border border-border rounded px-3 py-2 w-full text-sm font-mono"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-foreground/70 mb-2">Background</label>
              <div className="flex gap-2 items-center">
                <input 
                  type="color" 
                  value={config.bgColor} 
                  onChange={(e) => setConfig({ ...config, bgColor: e.target.value })}
                  className="w-10 h-10 rounded cursor-pointer bg-transparent border-0 p-0"
                />
                <input 
                  type="text" 
                  value={config.bgColor} 
                  onChange={(e) => setConfig({ ...config, bgColor: e.target.value })}
                  className="bg-background border border-border rounded px-3 py-2 w-full text-sm font-mono"
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Shapes Section (Placeholder since standard qrcode.react doesn't support complex shapes without forks, but we keep UI) */}
      <div className="glass-panel overflow-hidden">
        <button 
          onClick={() => toggleSection("shapes")}
          className="w-full flex items-center justify-between p-4 font-medium hover:bg-white/5 transition-colors"
        >
          <span className="flex items-center gap-2"><SlidersHorizontal size={18} /> Shapes (Pro)</span>
          <span>{activeSection === "shapes" ? "−" : "+"}</span>
        </button>
        {activeSection === "shapes" && (
          <div className="p-4 pt-0 border-t border-border">
            <p className="text-sm text-foreground/60 mb-3">Upgrade to Pro to unlock custom shapes, dots, and corners. Standard squares are applied.</p>
            <div className="flex gap-2">
              <button disabled className="px-4 py-2 bg-surface rounded border-2 border-primary opacity-50 cursor-not-allowed">Squares</button>
              <button disabled className="px-4 py-2 bg-surface rounded border border-border opacity-50 cursor-not-allowed">Dots</button>
              <button disabled className="px-4 py-2 bg-surface rounded border border-border opacity-50 cursor-not-allowed">Rounded</button>
            </div>
          </div>
        )}
      </div>

      {/* Logo Section */}
      <div className="glass-panel overflow-hidden">
        <button 
          onClick={() => toggleSection("logo")}
          className="w-full flex items-center justify-between p-4 font-medium hover:bg-white/5 transition-colors"
        >
          <span className="flex items-center gap-2"><ImageIcon size={18} /> Logo</span>
          <span>{activeSection === "logo" ? "−" : "+"}</span>
        </button>
        {activeSection === "logo" && (
          <div className="p-4 pt-0 border-t border-border flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => logoInputRef.current?.click()}
                className="px-4 py-2 bg-surface border border-border rounded hover:bg-surface/80 transition text-sm"
              >
                Upload Image
              </button>
              <input 
                type="file" 
                ref={logoInputRef} 
                onChange={handleLogoUpload} 
                accept="image/*" 
                className="hidden" 
              />
              {config.logoImage && (
                <button 
                  onClick={() => setConfig({ ...config, logoImage: "" })}
                  className="text-red-400 text-sm hover:underline"
                >
                  Remove
                </button>
              )}
            </div>
            
            {config.logoImage && (
              <div className="flex gap-4 items-center mt-2">
                <label className="text-sm text-foreground/70 min-w-[60px]">Scale</label>
                <input 
                  type="range" 
                  min="20" max="100" 
                  value={config.logoWidth} 
                  onChange={(e) => setConfig({ ...config, logoWidth: Number(e.target.value), logoHeight: Number(e.target.value) })}
                  className="w-full accent-primary" 
                />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Error Correction */}
      <div className="glass-panel overflow-hidden">
        <button 
          onClick={() => toggleSection("ec")}
          className="w-full flex items-center justify-between p-4 font-medium hover:bg-white/5 transition-colors"
        >
          <span className="flex items-center gap-2"><ShieldCheck size={18} /> Error Correction</span>
          <span>{activeSection === "ec" ? "−" : "+"}</span>
        </button>
        {activeSection === "ec" && (
          <div className="p-4 pt-0 border-t border-border">
            <p className="text-sm text-foreground/60 mb-3">Higher levels allow the QR code to be readable even if dirty, damaged, or obscured by a large logo.</p>
            <div className="flex bg-surface rounded p-1">
              {(['L', 'M', 'Q', 'H'] as const).map(level => (
                <button
                  key={level}
                  onClick={() => setConfig({ ...config, errorCorrectionLevel: level })}
                  className={`flex-1 py-2 text-sm rounded ${config.errorCorrectionLevel === level ? "bg-primary text-black font-medium" : "hover:bg-white/5"}`}
                >
                  {level} ({level === 'L' ? '7%' : level === 'M' ? '15%' : level === 'Q' ? '25%' : '30%'})
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
