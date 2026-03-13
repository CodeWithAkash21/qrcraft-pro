import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";

const blogPosts: Record<string, {
  title: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
}> = {
  "qr-code-for-upi-payment": {
    title: "How to Create a QR Code for UPI Payments",
    date: "March 10, 2026",
    category: "Tutorials",
    readTime: "5 min read",
    content: `
## Generate a UPI QR Code in Seconds

UPI (Unified Payments Interface) QR codes are the fastest way to receive digital payments in India. With QRCraft Pro, you can generate a branded, scannable UPI QR code in seconds.

### What is a UPI QR Code?

A UPI QR code encodes a special URI in the format:

\`\`\`
upi://pay?pa=USERNAME@upi&pn=YOUR NAME&am=AMOUNT&tn=DESCRIPTION
\`\`\`

When scanned, this URI is understood by all UPI-enabled apps like PhonePe, Google Pay, Paytm, and BHIM.

### Step-by-Step: Create Your UPI QR Code

1. **Open QRCraft Pro** and select the **"URL"** QR type from the tab list.
2. In the URL field, enter your UPI deep link like:
   \`upi://pay?pa=john@okhdfc&pn=John+Doe&tn=Payment\`
3. **Customize** your QR code with brand colors and a logo.
4. **Download** in PNG or SVG for high-resolution printing.

### Tips for UPI QR Codes

- **Test first**: Always perform a small test payment before printing.
- **Include the amount** for fixed-price products to speed up checkout.
- **Print at 300 DPI or above** for reliable scanning.

### Security Notice

Never share your UPI QR code on untrusted channels. A UPI QR code only lets people **send** money to you, so they are inherently one-directional and safe to display publicly.

---

*Generate your own UPI QR code for free at QRCraft Pro.*
    `,
  },
  "best-qr-code-practices": {
    title: "Best Practices for QR Code Design in 2026",
    date: "March 5, 2026",
    category: "Design",
    readTime: "4 min read",
    content: `
## Design QR Codes That Actually Get Scanned

A poorly designed QR code can confuse smartphones and lead to scan failures. Follow these essential best practices.

### 1. Contrast is King

The most important factor for a scannable QR code is **high contrast** between the foreground (dark) and background (light). QRCraft Pro gives you a live Scanability Score for every color pair you choose.

### 2. Quiet Zone (White Border)

Every QR code needs a quiet zone — a clear margin around the edges. This helps scanners identify where the code starts. A good rule of thumb is **4 modules** wide on each side.

### 3. Don't Over-Customize

Adding a logo is great; covering too much of the data matrix is not. QR codes have built-in error correction (up to 30%), but going beyond that starts causing failures.

### 4. Test on Multiple Devices

Before going live, test your QR code on:
- iPhone (default Camera app)
- Android (Google Lens)
- Dedicated QR scanner apps

---

*Use QRCraft Pro's Scanability Score to design perfectly scannable QR codes.*
    `,
  },
};

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) return { title: "Not Found | QRCraft Pro Blog" };
  return {
    title: `${post.title} | QRCraft Pro Blog`,
    description: post.content.slice(0, 155),
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts[slug];
  if (!post) notFound();

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <div className="mb-2">
        <Link href="/blog" className="text-sm text-foreground/50 hover:text-primary transition-colors">
          ← All Posts
        </Link>
      </div>
      
      <div className="my-6 flex items-center gap-3 text-sm text-foreground/60">
        <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs font-medium">{post.category}</span>
        <span>{post.date}</span>
        <span>·</span>
        <span>{post.readTime}</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-heading font-bold mb-8 leading-tight">{post.title}</h1>

      <div className="glass-panel p-8 prose prose-invert max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-foreground/80 prose-a:text-primary prose-code:text-primary prose-strong:text-foreground prose-pre:bg-background/50">
        {post.content.split("\n").map((line, i) => {
          if (line.startsWith("## ")) return <h2 key={i} className="text-2xl font-bold mt-8 mb-4">{line.slice(3)}</h2>;
          if (line.startsWith("### ")) return <h3 key={i} className="text-xl font-bold mt-6 mb-3 text-primary">{line.slice(4)}</h3>;
          if (line.startsWith("- ")) return <li key={i} className="ml-4 mb-1 text-foreground/80">{line.slice(2)}</li>;
          if (line.startsWith("---")) return <hr key={i} className="border-border my-8" />;
          if (line.startsWith("*")) return <p key={i} className="text-sm text-foreground/60 italic">{line.slice(1, -1)}</p>;
          if (line.trim() === "") return <div key={i} className="mb-4"></div>;
          if (line.startsWith("`") && line.endsWith("`")) {
            return <code key={i} className="block bg-background/50 px-4 py-2 rounded-lg font-mono text-sm text-primary my-4 border border-border">{line.slice(1, -1)}</code>;
          }
          return <p key={i} className="mb-4 text-foreground/80 leading-relaxed">{line}</p>;
        })}
      </div>

      <div className="mt-12 glass-panel p-6 text-center">
        <h3 className="text-xl font-bold mb-2">Ready to create your QR code?</h3>
        <p className="text-foreground/70 mb-4">Use QRCraft Pro to generate, customize, and download beautiful QR codes in seconds.</p>
        <Link href="/" className="px-6 py-3 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(var(--primary),0.4)] inline-block">
          Generate Free QR Code →
        </Link>
      </div>
    </div>
  );
}
