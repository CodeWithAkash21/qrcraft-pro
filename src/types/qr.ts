export type QRType = 
  | "url" | "text" | "wifi" | "whatsapp" | "vcard" 
  | "email" | "upi" | "location" | "event" 
  | "encrypted" | "app" | "spotify";

export type QRCodeConfig = {
  // Data payload settings
  data: string;
  type: QRType;
  
  // Style settings
  fgColor: string;
  bgColor: string;
  qrStyle: "squares" | "dots"; // we're using qrcode.react which supports squares/dots but let's stick to standard params, actually qrcode.react v3+ doesn't have "qrStyle" but "eyeRadius" and "qrStyle" in some forks. We'll simulate it or just pass fg/bg.
  size: number;
  margin: number;
  errorCorrectionLevel: "L" | "M" | "Q" | "H";
  
  // Logo settings
  logoImage: string; // data URI
  logoWidth: number;
  logoHeight: number;
  logoOpacity: number;
  isEncrypted?: boolean;
};

export const INITIAL_QR_CONFIG: QRCodeConfig = {
  data: "https://qrcraft.app",
  type: "url",
  fgColor: "#000000",
  bgColor: "#ffffff",
  qrStyle: "squares",
  size: 300,
  margin: 2,
  errorCorrectionLevel: "M",
  logoImage: "",
  logoWidth: 60,
  logoHeight: 60,
  logoOpacity: 1,
};
