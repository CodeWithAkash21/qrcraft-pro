import Link from "next/link";
import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-black font-bold">
                <Zap size={20} />
              </div>
              <span className="font-heading text-xl tracking-tight">QRCraft<span className="text-primary text-sm tracking-normal">.app</span></span>
            </Link>
            <p className="text-foreground/60 text-sm mb-4">
              The fastest, most secure QR code generator. Create highly customizable, scan-optimized QR codes for free.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 font-heading">Product</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><Link href="/" className="hover:text-primary transition">QR Generator</Link></li>
              <li><Link href="/bulk" className="hover:text-primary transition">Bulk Generator</Link></li>
              <li><Link href="/scanner" className="hover:text-primary transition">Web QR Scanner</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 font-heading">Resources</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><Link href="/blog" className="hover:text-primary transition">Blog</Link></li>
              <li><Link href="/blog/best-practices" className="hover:text-primary transition">Best Practices</Link></li>
              <li><Link href="/tools/wifi" className="hover:text-primary transition">WiFi QR Code</Link></li>
              <li><Link href="/tools/vcard" className="hover:text-primary transition">vCard QR Code</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 font-heading">Tools</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              <li><Link href="/tools/barcode" className="hover:text-primary transition">Barcode Generator</Link></li>
              <li><Link href="/tools/shortener" className="hover:text-primary transition">URL Shortener</Link></li>
              <li><Link href="/tools/base64" className="hover:text-primary transition">Base64 Encode/Decode</Link></li>
              <li><Link href="/tools/hash" className="hover:text-primary transition">SHA-256 Hasher</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-sm text-foreground/50">
          <p>© {new Date().getFullYear()} QRCraft.app. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 md:mt-0 justify-center">
            <Link href="/about" className="hover:text-primary transition">About</Link>
            <Link href="/contact" className="hover:text-primary transition">Contact</Link>
            <Link href="/privacy-policy" className="hover:text-primary transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
