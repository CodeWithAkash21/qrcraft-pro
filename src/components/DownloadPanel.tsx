"use client";

import { Download, Share2, Crown, Info } from "lucide-react";

export default function DownloadPanel({
  onDownloadPNG,
  onDownloadSVG,
  onDownloadPDF,
  onShare,
}: {
  onDownloadPNG: () => void;
  onDownloadSVG: () => void;
  onDownloadPDF: () => void;
  onShare: () => void;
}) {
  return (
    <div className="flex flex-col gap-3 mt-6">
      <h3 className="text-xl font-heading mb-2">Export Options</h3>
      
      <button 
        onClick={onDownloadPNG}
        className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-black font-bold py-4 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:scale-[1.02]"
      >
        <Download size={20} />
        Download PNG
      </button>
      
      <div className="grid grid-cols-2 gap-3">
        <button 
          onClick={onDownloadSVG}
          className="flex items-center justify-center gap-2 bg-surface hover:bg-surface/80 border border-border py-3 px-4 rounded-xl transition-all font-medium"
        >
          <Download size={18} className="text-foreground/70" />
          SVG
        </button>
        <button 
          onClick={() => {
            // Check for Pro visually or just simulate for now
            onDownloadPDF();
          }}
          className="relative flex items-center justify-center gap-2 bg-surface hover:bg-surface/80 border border-border py-3 px-4 rounded-xl transition-all font-medium overflow-hidden group"
        >
          <Crown size={15} className="text-yellow-400 absolute top-1.5 left-1.5 opacity-70" />
          <Download size={18} className="text-foreground/70" />
          PDF (Print)
        </button>
      </div>

      <button 
        onClick={onShare}
        className="mt-2 text-primary font-medium flex items-center justify-center gap-2 hover:underline p-2 mx-auto"
      >
        <Share2 size={16} />
        Share QR Link
      </button>

      {/* Free Tool Notice */}
      <div className="mt-4 flex items-start gap-2 text-xs text-foreground/50 bg-black/20 p-3 rounded border border-border">
        <Info size={16} className="shrink-0 mt-0.5" />
        <p>Your QR codes are generated entirely in your browser. They never expire and have no scan limits.</p>
      </div>
    </div>
  );
}
