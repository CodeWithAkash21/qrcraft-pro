"use client";

import { Link, Type, Wifi, MessageCircle, Contact, Mail, IndianRupee, MapPin, Calendar, Lock, Smartphone, Music } from "lucide-react";
import { QRType } from "@/types/qr";

const TABS: { id: QRType; label: string; icon: any }[] = [
  { id: "url", label: "URL", icon: Link },
  { id: "text", label: "Text", icon: Type },
  { id: "wifi", label: "WiFi", icon: Wifi },
  { id: "whatsapp", label: "WhatsApp", icon: MessageCircle },
  { id: "vcard", label: "vCard", icon: Contact },
  { id: "email", label: "Email", icon: Mail },
  { id: "upi", label: "UPI", icon: IndianRupee },
  { id: "location", label: "Location", icon: MapPin },
  { id: "event", label: "Event", icon: Calendar },
  { id: "encrypted", label: "Secure QR", icon: Lock },
  { id: "app", label: "App Link", icon: Smartphone },
  { id: "spotify", label: "Spotify", icon: Music },
];

export default function TabSelector({
  activeTab,
  onChange,
}: {
  activeTab: QRType;
  onChange: (tab: QRType) => void;
}) {
  return (
    <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
      <div className="flex gap-2 min-w-max px-2">
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all ${
                isActive 
                  ? "bg-primary text-black neon-glow" 
                  : "bg-surface/50 text-foreground/70 hover:bg-surface hover:text-foreground border border-transparent hover:border-border"
              }`}
            >
              <Icon size={18} />
              {tab.label}
              {tab.id === "encrypted" && (
                <span className="bg-black/20 text-xs px-1.5 py-0.5 rounded ml-1">PRO</span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
