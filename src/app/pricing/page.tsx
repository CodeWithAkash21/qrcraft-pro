import React from "react";
import { Check, X, ShieldAlert } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Pricing | QRCraft Pro",
  description: "Simple, transparent pricing for teams of all sizes.",
};

const features = [
  { name: "Dynamic QR Codes", free: false, pro: true },
  { name: "Bulk Generator", free: false, pro: true },
  { name: "API Access", free: false, pro: true },
  { name: "Static QR Codes", free: true, pro: true },
  { name: "Basic Customization", free: true, pro: true },
  { name: "No Ads", free: false, pro: true },
  { name: "Password Encrypted QRs", free: true, pro: true },
  { name: "Scan Analytics", free: false, pro: true },
];

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
          Simple, <span className="text-primary neon-text">Transparent</span> Pricing
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Choose the plan that's right for you. Free forever for basic use, Pro for power users.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Free Tier */}
        <div className="glass-panel p-8 flex flex-col relative border-border/50">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Free</h2>
            <p className="text-foreground/70 mb-6">Perfect for quick, one-off codes.</p>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-heading font-bold">$0</span>
              <span className="text-foreground/50">/month</span>
            </div>
          </div>
          
          <ul className="flex-grow space-y-4 mb-8">
            {features.map((feat, i) => (
              <li key={i} className="flex items-center gap-3">
                {feat.free ? (
                  <Check size={20} className="text-green-500 shrink-0" />
                ) : (
                  <X size={20} className="text-foreground/30 shrink-0" />
                )}
                <span className={feat.free ? "text-foreground" : "text-foreground/50"}>{feat.name}</span>
              </li>
            ))}
          </ul>
          
          <Link href="/" className="w-full py-4 text-center rounded-lg border border-primary/50 text-primary font-bold hover:bg-primary/10 transition-colors">
            Get Started Free
          </Link>
        </div>

        {/* Pro Tier */}
        <div className="glass-panel p-8 flex flex-col relative border-primary/50 shadow-[0_0_30px_rgba(var(--primary),0.15)] transform md:-translate-y-4">
          <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
            MOST POPULAR
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2 text-primary">Pro</h2>
            <p className="text-foreground/70 mb-6">For professionals and businesses.</p>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-heading font-bold">$9</span>
              <span className="text-foreground/50">/month</span>
            </div>
          </div>
          
          <ul className="flex-grow space-y-4 mb-8">
            {features.map((feat, i) => (
              <li key={i} className="flex items-center gap-3">
                {feat.pro ? (
                  <Check size={20} className="text-primary shrink-0" />
                ) : (
                  <X size={20} className="text-foreground/30 shrink-0" />
                )}
                <span className={feat.pro ? "text-foreground font-medium" : "text-foreground/50"}>{feat.name}</span>
              </li>
            ))}
          </ul>
          
          <button className="w-full py-4 text-center rounded-lg bg-primary text-primary-foreground font-bold shadow-[0_0_20px_rgba(var(--primary),0.4)] hover:shadow-[0_0_30px_rgba(var(--primary),0.6)] transition-all">
            Upgrade to Pro
          </button>
        </div>
      </div>
      
      <div className="mt-16 text-center max-w-2xl mx-auto glass-panel p-6">
        <div className="flex items-center justify-center gap-2 mb-2 text-yellow-500">
          <ShieldAlert size={20} />
          <h4 className="font-bold">Secure Payment</h4>
        </div>
        <p className="text-sm text-foreground/70">
          All transactions are processed securely via Stripe. You can cancel your subscription at any time from your account dashboard.
        </p>
      </div>
    </div>
  );
}
