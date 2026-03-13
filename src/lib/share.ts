// Generates a shareable URL that embeds QR customization state

export function generateShareUrl(state: any): string {
  if (typeof window === "undefined") return "";
  try {
    const jsonString = JSON.stringify(state);
    const base64 = btoa(encodeURIComponent(jsonString));
    return `${window.location.origin}/?state=${base64}`;
  } catch (e) {
    console.error("Failed to generate share URL", e);
    return "";
  }
}

export function decodeShareUrl(base64: string): any {
  try {
    const jsonString = decodeURIComponent(atob(base64));
    return JSON.parse(jsonString);
  } catch (e) {
    console.error("Failed to decode share URL", e);
    return null;
  }
}
