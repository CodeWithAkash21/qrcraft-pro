"use client";

import { useState } from "react";
import { QRType } from "@/types/qr";
import { generateURL, generateText, generateWiFi, generateWhatsApp, generateVCard, generateEmail, generateUPI, generateLocation, generateEvent, generateAppStore, generateSpotify } from "@/lib/qr-generators";

export default function InputForms({
  activeTab,
  onPayloadChange,
}: {
  activeTab: QRType;
  onPayloadChange: (payload: string) => void;
}) {
  // State for different forms
  const [url, setUrl] = useState("https://qrcraft.app");
  const [text, setText] = useState("");
  
  // WiFi state
  const [wifiSsid, setWifiSsid] = useState("");
  const [wifiPass, setWifiPass] = useState("");
  const [wifiEncrypt, setWifiEncrypt] = useState<"WPA"|"WEP"|"nopass">("WPA");
  const [wifiHidden, setWifiHidden] = useState(false);

  // WhatsApp state
  const [waPhone, setWaPhone] = useState("");
  const [waText, setWaText] = useState("");

  // Email state
  const [emailTo, setEmailTo] = useState("");
  const [emailSubj, setEmailSubj] = useState("");
  const [emailBody, setEmailBody] = useState("");

  // UPI state
  const [upiId, setUpiId] = useState("");
  const [upiName, setUpiName] = useState("");
  const [upiAmount, setUpiAmount] = useState("");

  // Location state
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const updateSelectedPayload = () => {
    let payload = "";
    switch (activeTab) {
      case "url": payload = generateURL(url); break;
      case "text": payload = generateText(text); break;
      case "wifi": payload = generateWiFi(wifiSsid, wifiPass, wifiEncrypt, wifiHidden); break;
      case "whatsapp": payload = generateWhatsApp(waPhone, waText); break;
      case "email": payload = generateEmail(emailTo, emailSubj, emailBody); break;
      case "upi": payload = generateUPI(upiId, upiName, upiAmount); break;
      case "location": payload = generateLocation(lat, lng); break;
      case "vcard": payload = "BEGIN:VCARD\nVERSION:3.0\nN:Doe;John;;;\nFN:John Doe\nTEL;TYPE=CELL:1234567890\nEND:VCARD"; break; // simplified
      case "event": payload = generateEvent("Party", "20240101T120000Z", "20240101T140000Z"); break;
      case "app": payload = generateAppStore("https://app.com"); break;
      case "spotify": payload = generateSpotify("spotify:track:0VjIjW4GlUZAMYd2vXMi3b"); break;
      case "encrypted": payload = "ENCRYPTED_DEMO_DATA"; break;
    }
    onPayloadChange(payload);
  };

  // Run whenever relevant state changes
  // In a real app we'd use useEffect for each, but for brevity we'll trigger on blur/change
  
  return (
    <div className="glass-panel p-6" onBlur={updateSelectedPayload} onChange={updateSelectedPayload}>
      {activeTab === "url" && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Website URL</label>
            <input 
              type="url" 
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
              placeholder="https://example.com"
            />
          </div>
        </div>
      )}

      {activeTab === "text" && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Message or Text</label>
            <textarea 
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 h-32 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition resize-none"
              placeholder="Enter any text here..."
            />
          </div>
        </div>
      )}

      {activeTab === "wifi" && (
        <div className="space-y-4 grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium mb-2">Network Name (SSID)</label>
            <input 
              type="text" 
              value={wifiSsid}
              onChange={(e) => setWifiSsid(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 outline-none"
              placeholder="My WiFi Network"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input 
              type="text" 
              value={wifiPass}
              onChange={(e) => setWifiPass(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 outline-none"
              placeholder="Password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Encryption</label>
            <select 
              value={wifiEncrypt}
              onChange={(e) => setWifiEncrypt(e.target.value as any)}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 outline-none text-foreground appearance-none"
            >
              <option value="WPA">WPA/WPA2</option>
              <option value="WEP">WEP</option>
              <option value="nopass">None</option>
            </select>
          </div>
          <div className="sm:col-span-2 flex items-center gap-2 mt-2">
            <input 
              type="checkbox" 
              id="hidden-wifi"
              checked={wifiHidden}
              onChange={(e) => setWifiHidden(e.target.checked)}
              className="w-5 h-5 rounded border-border text-primary focus:ring-primary bg-background"
            />
            <label htmlFor="hidden-wifi" className="text-sm">Hidden Network</label>
          </div>
        </div>
      )}

      {activeTab === "whatsapp" && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Phone Number (with country code)</label>
            <input 
              type="text" 
              value={waPhone}
              onChange={(e) => setWaPhone(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-3"
              placeholder="+12345678900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Pre-filled Message</label>
            <textarea 
              value={waText}
              onChange={(e) => setWaText(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 h-24 resize-none"
              placeholder="Hello! I'm interested in..."
            />
          </div>
        </div>
      )}

      {activeTab === "email" && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email To</label>
            <input 
              type="email" 
              value={emailTo}
              onChange={(e) => setEmailTo(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-3"
              placeholder="contact@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Subject</label>
            <input 
              type="text" 
              value={emailSubj}
              onChange={(e) => setEmailSubj(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-3"
              placeholder="Inquiry"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Body</label>
            <textarea 
              value={emailBody}
              onChange={(e) => setEmailBody(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-3 h-24 resize-none"
              placeholder="Hi there..."
            />
          </div>
        </div>
      )}

      {activeTab === "upi" && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">UPI ID</label>
            <input 
              type="text" 
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-3"
              placeholder="name@upi"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Payee Name</label>
            <input 
              type="text" 
              value={upiName}
              onChange={(e) => setUpiName(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-3"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Amount (Optional)</label>
            <input 
              type="number" 
              value={upiAmount}
              onChange={(e) => setUpiAmount(e.target.value)}
              className="w-full bg-background border border-border rounded-lg px-4 py-3"
              placeholder="100.00"
            />
          </div>
        </div>
      )}

      {/* Put other types behind simplified stubs or Pro banners */}
      {["vcard", "location", "event", "app", "spotify"].includes(activeTab) && (
        <div className="p-8 text-center text-foreground/60">
          Form fields for {activeTab.toUpperCase()} QR code would appear here.
          <br /><br />
          <button className="text-primary hover:underline" onClick={updateSelectedPayload}>Click to set demo data</button>
        </div>
      )}

      {activeTab === "encrypted" && (
        <div className="p-8 text-center bg-black/30 border border-primary/20 rounded-lg">
          <h4 className="text-xl font-bold mb-2 text-primary neon-text">Pro Feature: AES-256 Encryption</h4>
          <p className="text-sm text-foreground/70 mb-4 max-w-md mx-auto">
            Encrypt documents, private messages, or secret keys directly inside the QR code. Requires a password to decrypt.
          </p>
          <button className="bg-white text-black font-bold px-6 py-2 rounded-lg" onClick={updateSelectedPayload}>
            Generate Demo Secure QR
          </button>
        </div>
      )}

    </div>
  );
}
