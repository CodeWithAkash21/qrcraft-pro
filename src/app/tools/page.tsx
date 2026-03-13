import React from "react";
import { Wrench, Shield, FileText, Smartphone, Laptop } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Free QR Code Tools | QRCraft Pro",
  description: "A collection of free QR code tools including scanner, bulk generator, and decoders.",
};

const tools = [
  {
    title: "QR Code Scanner",
    description: "Instantly scan and decode QR codes safely from your webcam or mobile camera.",
    icon: <Smartphone size={24} />,
    href: "/scanner",
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-500",
  },
  {
    title: "Bulk QR Generator",
    description: "Generate hundreds of branded QR codes at once from a CSV file.",
    icon: <Laptop size={24} />,
    href: "/bulk",
    color: "from-primary/20 to-primary/10",
    iconColor: "text-primary",
  },
  {
    title: "Encrypted QR Decrypter",
    description: "Decrypt securely encrypted QR codes using your secret password.",
    icon: <Shield size={24} />,
    href: "/scanner",
    color: "from-purple-500/20 to-purple-600/20",
    iconColor: "text-purple-500",
  },
  {
    title: "QR Code API Docs",
    description: "Documentation for our fast and reliable QR code generation API.",
    icon: <FileText size={24} />,
    href: "#",
    color: "from-green-500/20 to-green-600/20",
    iconColor: "text-green-500",
  },
];

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading font-bold mb-4 flex items-center justify-center gap-3">
          <Wrench className="text-primary" size={36} />
          Free <span className="text-primary neon-text">Tools</span>
        </h1>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
          Explore our collection of free tools for scanning, generating, and managing QR codes.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {tools.map((tool, index) => (
          <Link href={tool.href} key={index} className="group">
            <div className="glass-panel p-6 h-full flex flex-col hover:border-primary/50 transition-colors cursor-pointer relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${tool.color} rounded-full blur-3xl -mr-10 -mt-10 opacity-50 group-hover:opacity-100 transition-opacity z-0`}></div>
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-background/50 border border-border overflow-hidden`}>
                  <div className={tool.iconColor}>{tool.icon}</div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{tool.title}</h3>
                <p className="text-foreground/70">{tool.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
