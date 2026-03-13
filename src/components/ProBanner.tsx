"use client";

import { Crown, Sparkles, Zap, ArrowRight } from "lucide-react";

export default function ProBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-surface to-black border border-border p-6 shadow-xl">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-10 flex w-full justify-center">
        <div className="w-3/4 h-20 bg-secondary/10 blur-3xl rounded-[100%]"></div>
      </div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-2 inline-flex bg-white/10 px-3 py-1 rounded-full border border-white/5 mb-4 backdrop-blur-sm">
          <Crown size={14} className="text-yellow-400" />
          <span className="text-xs font-bold tracking-wide uppercase">Upgrade to Pro</span>
        </div>
        
        <h3 className="text-2xl font-heading mb-2">Unlock Advanced Features</h3>
        <p className="text-foreground/70 text-sm mb-6 max-w-[280px]">
          Dynamic tracking, AES-256 secure codes, custom shapes, bulk generate, and remove ads forever.
        </p>
        
        <ul className="space-y-2 mb-6 text-sm">
          <li className="flex items-center gap-2">
            <Zap size={14} className="text-primary" />
            <span>Dynamic tracking (Change URL anytime)</span>
          </li>
          <li className="flex items-center gap-2">
            <Sparkles size={14} className="text-primary" />
            <span>Advanced API Access</span>
          </li>
        </ul>
        
        <button className="w-full flex items-center justify-center gap-2 bg-white text-black font-bold py-3 px-6 rounded-lg transition-all hover:bg-gray-200">
          Get Pro - $9/mo
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
