// AES-256-GCM encryption using Web Crypto API

async function deriveKey(password: string, salt: Uint8Array): Promise<CryptoKey> {
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits", "deriveKey"]
  );

  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: salt as any,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

function bufferToHex(buffer: ArrayBuffer | Uint8Array): string {
  const bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
  return Array.from(bytes)
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

function hexToBuffer(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < hex.length; i += 2) {
    bytes[i / 2] = parseInt(hex.substring(i, i + 2), 16);
  }
  return bytes;
}

export async function encryptText(text: string, password: string): Promise<string> {
  const enc = new TextEncoder();
  
  // Create salt and IV
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  
  const key = await deriveKey(password, salt);
  
  const encryptedObj = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv: iv as any },
    key,
    enc.encode(text)
  );
  
  // Format: salt:iv:ciphertext (hex encoded)
  return `${bufferToHex(salt)}:${bufferToHex(iv)}:${bufferToHex(encryptedObj)}`;
}

export async function decryptText(encryptedPayload: string, password: string): Promise<string> {
  try {
    const parts = encryptedPayload.split(":");
    if (parts.length !== 3) throw new Error("Invalid payload format");
    
    const salt = hexToBuffer(parts[0]);
    const iv = hexToBuffer(parts[1]);
    const ciphertext = hexToBuffer(parts[2]);
    
    const key = await deriveKey(password, salt);
    
    const decryptedBuffer = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv: iv as any },
      key,
      ciphertext as any
    );
    
    const dec = new TextDecoder();
    return dec.decode(decryptedBuffer);
  } catch (err) {
    throw new Error("Decryption failed. Incorrect password or corrupted data.");
  }
}
