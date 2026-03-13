"use client";

import { useRef, useEffect, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { QRCodeConfig } from "@/types/qr";
import { calculateScanability, ScanabilityResult } from "@/lib/scanability";
import { AlertCircle, CheckCircle2, ShieldCheck } from "lucide-react";

export default function QRPreview({
  config,
  payload,
}: {
  config: QRCodeConfig;
  payload: string;
}) {
  const [scanability, setScanability] = useState<ScanabilityResult | null>(null);

  // We recalculate scanability on config change
  useEffect(() => {
    // Simple logo size estimation
    let factor = 0;
    if (config.logoImage) {
      factor = (config.logoWidth * config.logoHeight) / (config.size * config.size);
    }
    const result = calculateScanability(config.fgColor, config.bgColor, !!config.logoImage, factor, config.errorCorrectionLevel);
    setScanability(result);
  }, [config]);

  if (!payload && config.type !== 'text') {
    return (
      <div className="w-full aspect-square max-w-[360px] mx-auto bg-surface/30 border border-border border-dashed rounded-xl flex items-center justify-center text-foreground/50 text-sm p-8 text-center">
        Enter required information to preview your QR code
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      {/* QR Code Container */}
      <div 
        id="qr-preview-container"
        className="relative bg-white p-4 rounded-xl shadow-2xl transition-all hover:scale-[1.02] duration-300 neon-glow group"
        style={{
          backgroundColor: config.bgColor,
        }}
      >
        {/* We use QRCodeCanvas so it's easy to download later */}
        <QRCodeCanvas
          id="qrcraft-canvas"
          value={payload || " "}
          size={config.size}
          bgColor={config.bgColor}
          fgColor={config.fgColor}
          level={config.errorCorrectionLevel}
          includeMargin={false} // We handle margin via CSS padding
          imageSettings={
            config.logoImage
              ? {
                  src: config.logoImage,
                  x: undefined,
                  y: undefined,
                  height: config.logoHeight,
                  width: config.logoWidth,
                  excavate: true, // clear space behind logo
                }
              : undefined
          }
        />

        {/* Pro Overlay for Encrypted QR */}
        {config.type === "encrypted" && (
          <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-md rounded-full p-1.5 shadow-lg border border-white/20">
            <ShieldCheck size={16} className="text-primary" />
          </div>
        )}
      </div>

      {/* Scanability Badge */}
      {scanability && (
        <div className="w-full max-w-[360px] mt-6 bg-surface/50 border border-border p-3 rounded-lg flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium flex items-center gap-1.5">
              Scanability Score:
            </span>
            <div className={`flex items-center gap-1.5 font-bold ${
              scanability.rating === 'Excellent' ? "text-primary" :
              scanability.rating === 'Good' ? "text-blue-400" :
              scanability.rating === 'Poor' ? "text-yellow-400" : "text-red-500"
            }`}>
              {scanability.score}/100
              {scanability.score >= 90 ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
            </div>
          </div>
          
          {scanability.issues.length > 0 && (
            <div className="bg-black/20 rounded p-2 text-xs">
              <ul className="list-disc pl-4 text-foreground/70 space-y-1">
                {scanability.issues.map((issue, i) => (
                  <li key={i}>{issue}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
