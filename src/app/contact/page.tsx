import { Metadata } from "next";
import { Mail, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | QRCraft Pro",
  description: "Get in touch with the QRCraft Pro team.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-3xl">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight mb-6">
          Get in <span className="text-primary">Touch</span>
        </h1>
        <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
          Have a question, feature request, or found a bug? We'd love to hear from you.
        </p>
      </div>

      <div className="bg-surface/50 border border-border rounded-2xl p-6 md:p-10 backdrop-blur-sm">
        <div className="flex flex-col items-center justify-center mb-10 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
            <Mail size={32} />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2 font-heading">Email Us Directly</h2>
          <p className="text-foreground/70">
            For the fastest response, send us an email. We typically reply within 24-48 hours.
          </p>
        </div>
        
        <form action="mailto:hello@qrcraft.app" method="GET" className="space-y-6" encType="text/plain">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-foreground/90">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="How can we help?"
                className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="body" className="text-sm font-medium text-foreground/90">
              Message
            </label>
            <textarea
              id="body"
              name="body"
              placeholder="Your message here..."
              rows={6}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-y"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-primary text-black font-bold py-4 rounded-lg hover:bg-primary/90 transition-all active:scale-[0.98] shadow-[0_0_15px_rgba(0,255,157,0.3)]"
          >
            <MessageSquare size={18} />
            <span>Open Email Client</span>
          </button>
          
          <p className="text-xs text-center text-foreground/50 mt-4">
            This will open your default email application (like Outlook, Mail, or Gmail).
          </p>
        </form>
      </div>
    </div>
  );
}
