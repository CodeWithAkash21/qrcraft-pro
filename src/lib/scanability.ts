/**
 * Calculates a scanability score for a QR Code based on:
 * 1. Contrast ratio between foreground and background.
 * 2. Error correction level vs logo size.
 */

// Converts a hex color to relative luminance (WCAG 2.0)
function getLuminance(hexColor: string): number {
  const color = hexColor.charAt(0) === '#' ? hexColor.substring(1, 7) : hexColor;
  const rHex = color.substring(0, 2);
  const gHex = color.substring(2, 4);
  const bHex = color.substring(4, 6);

  if (rHex.length !== 2 || gHex.length !== 2 || bHex.length !== 2) return 1;

  let r = parseInt(rHex, 16) / 255;
  let g = parseInt(gHex, 16) / 255;
  let b = parseInt(bHex, 16) / 255;

  r = r <= 0.03928 ? r / 12.92 : Math.pow((r + 0.055) / 1.055, 2.4);
  g = g <= 0.03928 ? g / 12.92 : Math.pow((g + 0.055) / 1.055, 2.4);
  b = b <= 0.03928 ? b / 12.92 : Math.pow((b + 0.055) / 1.055, 2.4);

  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function getContrastRatio(l1: number, l2: number): number {
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

export type ScanabilityResult = {
  score: number; // 0 to 100
  rating: 'Excellent' | 'Good' | 'Poor' | 'Critical';
  issues: string[];
};

export function calculateScanability(
  fgColor: string, 
  bgColor: string, 
  hasLogo: boolean, 
  logoSizeFactor: number, 
  ecLevel: 'L' | 'M' | 'Q' | 'H'
): ScanabilityResult {
  let score = 100;
  const issues: string[] = [];

  // Contrast Check
  const lFg = getLuminance(fgColor);
  const lBg = getLuminance(bgColor);
  const contrast = getContrastRatio(lFg, lBg);

  if (contrast < 3) {
    score -= 60;
    issues.push("Contrast ratio is critically low. QR might not scan.");
  } else if (contrast < 4.5) {
    score -= 30;
    issues.push("Low contrast. Consider making colors more distinct.");
  }

  // QR readers expect dark code on light background. Inverted can sometimes fail.
  if (lFg > lBg) {
    score -= 10;
    issues.push("Inverted colors (light QR on dark background) may fail on older scanners.");
  }

  // Logo & Error Correction Check
  if (hasLogo) {
    const errorCap = { 'L': 0.07, 'M': 0.15, 'Q': 0.25, 'H': 0.30 };
    const requiredEC = errorCap[ecLevel];

    if (logoSizeFactor > requiredEC) {
      score -= Math.min(50, (logoSizeFactor - requiredEC) * 200);
      issues.push(`Logo is too large for the ${ecLevel} error correction level.`);
    }
    
    if (logoSizeFactor > 0.3) {
      score -= 30;
      issues.push("Logo covers >30% of area. QR is highly likely to fail.");
    }
  }

  score = Math.max(0, Math.round(score));

  let rating: ScanabilityResult['rating'] = 'Excellent';
  if (score < 40) rating = 'Critical';
  else if (score < 70) rating = 'Poor';
  else if (score < 90) rating = 'Good';

  return { score, rating, issues };
}
