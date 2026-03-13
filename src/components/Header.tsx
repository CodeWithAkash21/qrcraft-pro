import Link from "next/link";
import { Crown, Zap } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-black font-bold group-hover:scale-110 transition-transform">
            <Zap size={20} />
          </div>
          <span className="font-heading text-xl tracking-tight hidden sm:block">QRCraft<span className="text-primary">.app</span></span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-foreground/80">
          <Link href="/" className="hover:text-primary transition-colors">Generator</Link>
          <Link href="/bulk" className="hover:text-primary transition-colors">Bulk (Beta)</Link>
          <Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
          <Link href="/blog" className="hover:text-primary transition-colors">Resources</Link>
        </nav>
        
        <div className="flex items-center gap-3">
          <Link 
            href="/pricing"
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2 rounded-lg text-sm font-bold transition-colors"
          >
            <Crown size={16} className="text-yellow-400" />
            <span className="hidden sm:block">Go Pro</span>
          </Link>
          <button className="bg-primary text-black font-bold px-4 py-2 rounded-lg text-sm hover:scale-105 transition-transform shadow-[0_0_15px_rgba(0,255,136,0.3)]">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
