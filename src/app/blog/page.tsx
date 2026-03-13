import React from "react";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export const metadata = {
  title: "Blog | QRCraft Pro",
  description: "Tips, tutorials, and guides about QR codes, marketing, and digital payments.",
};

const posts = [
  {
    slug: "qr-code-for-upi-payment",
    title: "How to Create a QR Code for UPI Payments",
    description: "Learn how to generate a UPI QR code for accepting digital payments instantly using QRCraft Pro.",
    date: "March 10, 2026",
    category: "Tutorials",
    readTime: "5 min read",
  },
  {
    slug: "best-qr-code-practices",
    title: "Best Practices for QR Code Design in 2026",
    description: "Master the art of creating scannable, beautiful, and brand-consistent QR codes with these expert tips.",
    date: "March 5, 2026",
    category: "Design",
    readTime: "4 min read",
  },
];

export default function BlogIndexPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-heading font-bold mb-4 flex items-center justify-center gap-3">
          <BookOpen className="text-primary" size={36} />
          QRCraft <span className="text-primary neon-text">Blog</span>
        </h1>
        <p className="text-foreground/70 max-w-xl mx-auto">Guides, tutorials, and insights about QR codes, digital payments, and marketing.</p>
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
            <div className="glass-panel p-6 hover:border-primary/50 transition-all hover:shadow-[0_0_20px_rgba(var(--primary),0.1)]">
              <div className="flex items-center gap-3 mb-3 text-sm text-foreground/60">
                <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium">{post.category}</span>
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
              <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-foreground/70">{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
