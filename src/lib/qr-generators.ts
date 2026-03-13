export const generateURL = (url: string) => url;
export const generateText = (text: string) => text;

export const generateWiFi = (ssid: string, password?: string, encryption: "WPA" | "WEP" | "nopass" = "WPA", hidden?: boolean) => {
  return `WIFI:S:${ssid};T:${encryption};P:${password || ""};H:${hidden ? "true" : "false"};;`;
};

export const generateWhatsApp = (phone: string, text?: string) => {
  const url = new URL(`https://wa.me/${phone.replace(/[^0-9]/g, "")}`);
  if (text) url.searchParams.append("text", text);
  return url.toString();
};

export const generateEmail = (to: string, subject?: string, body?: string) => {
  let mailto = `mailto:${to}`;
  const params = new URLSearchParams();
  if (subject) params.append("subject", subject);
  if (body) params.append("body", body);
  const qs = params.toString();
  if (qs) mailto += `?${qs}`;
  return mailto;
};

export const generateUPI = (pa: string, pn: string, am?: string) => {
  let upi = `upi://pay?pa=${pa}&pn=${pn}`;
  if (am) upi += `&am=${am}`;
  return upi;
};

export const generateLocation = (lat: string, lng: string) => {
  return `geo:${lat},${lng}`;
};

export const generateEvent = (summary: string, dtstart: string, dtend: string) => {
  return `BEGIN:VEVENT\nSUMMARY:${summary}\nDTSTART:${dtstart}\nDTEND:${dtend}\nEND:VEVENT`;
};

export const generateAppStore = (url: string) => url;
export const generateSpotify = (uri: string) => uri;
export const generateVCard = (vcardText: string) => vcardText;
