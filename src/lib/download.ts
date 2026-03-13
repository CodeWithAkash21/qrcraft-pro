import { jsPDF } from "jspdf";

/**
 * Helper to download the QR code canvas as a PNG
 */
export function downloadPNG(filename: string = "qrcraft.png") {
  const canvas = document.getElementById("qrcraft-canvas") as HTMLCanvasElement;
  if (!canvas) return;

  const url = canvas.toDataURL("image/png", 1.0);
  const a = document.createElement("a");
  a.download = filename;
  a.href = url;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/**
 * Since qrcode.react renders to a Canvas by default (unless we switch it to svg),
 * we might need to extract SVG from a separate component or just convert canvas to SVG.
 * Actually, qrcode.react can render SVG natively if requested. For this app, since
 * our main preview is a Canvas, we can generate a hidden SVG on the fly to download.
 */
export function downloadSVG(payload: string, config: any, filename: string = "qrcraft.svg") {
  // To avoid adding another library, we can instruct the user to use an online converter
  // OR we can generate a basic SVG string. Let's do a basic Blob download trick assuming
  // we render a hidden SVG in the DOM for this purpose, or we just alert them it's coming soon.
  // Actually, we can generate it using `qrcode` package if needed. Let's use `qrcode` string generation
  import("qrcode").then((QRCode) => {
    QRCode.toString(
      payload,
      {
        type: "svg",
        color: {
          dark: config.fgColor,
          light: config.bgColor,
        },
        errorCorrectionLevel: config.errorCorrectionLevel,
        margin: config.margin,
        width: config.size,
      },
      (err, string) => {
        if (err) {
          console.error(err);
          return;
        }

        const blob = new Blob([string], { type: "image/svg+xml;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.download = filename;
        a.href = url;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    );
  });
}

/**
 * Download as PDF (Print Ready) using jsPDF
 */
export function downloadPDF(filename: string = "qrcraft.pdf") {
  const canvas = document.getElementById("qrcraft-canvas") as HTMLCanvasElement;
  if (!canvas) return;

  const imgData = canvas.toDataURL("image/png", 1.0);
  // Default to A4 format, portrait
  const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const pdfWidth = pdf.internal.pageSize.getWidth();
  
  // Center the QR code, let's make it 100mm x 100mm
  const size = 100;
  const x = (pdfWidth - size) / 2;
  const y = 40; // 40mm from top

  pdf.setFontSize(20);
  pdf.text("QRCraft Pro - Scan Me", pdfWidth / 2, 25, { align: "center" });
  
  pdf.addImage(imgData, "PNG", x, y, size, size);
  
  pdf.setFontSize(10);
  pdf.setTextColor(150);
  pdf.text("Generated securely at qrcraft.app", pdfWidth / 2, y + size + 15, { align: "center" });

  pdf.save(filename);
}
