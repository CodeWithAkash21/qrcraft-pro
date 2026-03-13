"use client";

import React, { useEffect, useState, useRef } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { Scan, Link as LinkIcon, Copy, ExternalLink, ShieldAlert } from "lucide-react";

export default function ScannerPage() {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [isScanning, setIsScanning] = useState(true);
  const scannerRef = useRef<Html5QrcodeScanner | null>(null);

  useEffect(() => {
    if (isScanning && !scannerRef.current) {
      scannerRef.current = new Html5QrcodeScanner(
        "reader",
        { fps: 10, qrbox: { width: 250, height: 250 }, aspectRatio: 1.0 },
        /* verbose= */ false
      );
      
      scannerRef.current.render(
        (decodedText) => {
          setScanResult(decodedText);
          setIsScanning(false);
          if (scannerRef.current) {
            scannerRef.current.clear();
          }
        },
        (error) => {
          // ignore stream of errors while scanning
        }
      );
    }

    return () => {
      if (scannerRef.current) {
        scannerRef.current.clear().catch(e => console.error(e));
        scannerRef.current = null;
      }
    };
  }, [isScanning]);

  const handleReset = () => {
    setScanResult(null);
    setIsScanning(true);
  };

  const copyToClipboard = () => {
    if (scanResult) {
      navigator.clipboard.writeText(scanResult);
      alert("Copied to clipboard!");
    }
  };

  const isUrl = scanResult?.startsWith("http://") || scanResult?.startsWith("https://");

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl min-h-[70vh] flex flex-col">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-heading font-bold mb-4 flex items-center justify-center gap-3">
          <Scan className="text-primary" size={36} />
          QR Code <span className="text-primary neon-text">Scanner</span>
        </h1>
        <p className="text-foreground/70">Point your camera at any QR code to instantly decrypt and read its contents safely.</p>
      </div>

      <div className="flex-grow flex flex-col items-center">
        {isScanning ? (
          <div className="w-full max-w-md glass-panel p-4 overflow-hidden shadow-[0_0_30px_rgba(var(--primary),0.1)]">
            <div id="reader" className="w-full rounded-lg overflow-hidden border-2 border-primary/20 bg-black/50"></div>
          </div>
        ) : (
          <div className="w-full max-w-lg glass-panel p-8 flex flex-col items-center animate-in fade-in slide-in-from-bottom-4">
            <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(34,197,94,0.3)]">
              <Scan size={32} />
            </div>
            
            <h3 className="text-xl font-bold mb-2">Scan Successful!</h3>
            
            <div className="w-full bg-background/50 border border-border p-4 rounded-lg my-6 break-words text-center font-mono text-sm max-h-48 overflow-y-auto">
              {scanResult}
            </div>

            {isUrl && (
              <div className="w-full bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-3 mb-6 flex items-start gap-3">
                <ShieldAlert className="text-yellow-500 shrink-0 mt-0.5" size={18} />
                <p className="text-xs text-yellow-500/90 text-left">
                  This QR code contains a URL. Always verify the link before visiting it to avoid phishing attacks.
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-3 w-full justify-center">
              <button 
                onClick={copyToClipboard}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors flex items-center gap-2"
              >
                <Copy size={16} /> Copy
              </button>
              
              {isUrl && (
                <a 
                  href={scanResult || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-primary-foreground font-medium rounded-md hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(var(--primary),0.4)] flex items-center gap-2"
                >
                  <ExternalLink size={16} /> Open Link
                </a>
              )}
            </div>

            <button 
              onClick={handleReset}
              className="mt-8 text-sm text-foreground/60 hover:text-primary transition-colors underline underline-offset-4"
            >
              Scan Another Code
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
