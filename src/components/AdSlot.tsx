export default function AdSlot({
  slot,
  format = "horizontal",
}: {
  slot: string;
  format?: "horizontal" | "rectangle" | "vertical";
}) {
  // In a real implementation this would hold Google AdSense <ins> tags
  // For now, it's a visually distinct placeholder that serves as our revenue placeholder
  
  const h = format === "horizontal" ? "h-24 max-h-[90px]" 
          : format === "rectangle" ? "h-[250px]" 
          : "h-[600px] w-[160px]";
          
  const w = format === "vertical" ? "" : "w-full max-w-[728px]";
  
  return (
    <div className={`mx-auto bg-surface/30 border border-border border-dashed rounded flex flex-col items-center justify-center text-foreground/30 text-sm overflow-hidden ${h} ${w}`}>
      <span className="uppercase font-bold tracking-widest text-xs opacity-50 mb-1">Advertisement</span>
      <span>{format} / {slot}</span>
    </div>
  );
}
