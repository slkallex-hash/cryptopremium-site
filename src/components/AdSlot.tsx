import { cn } from "@/lib/utils";

interface AdSlotProps {
  id: string;
  className?: string;
  type?: "banner" | "square" | "sticky";
}

export function AdSlot({ id, className, type = "banner" }: AdSlotProps) {
  // AADS / AdSense placeholder
  // In a real scenario, you would insert the script tag or component here
  
  return (
    <div
      className={cn(
        "flex items-center justify-center bg-zinc-900 border border-zinc-800 text-zinc-500 text-sm font-mono overflow-hidden relative",
        type === "banner" && "w-full h-[90px] md:h-[120px]",
        type === "square" && "w-full aspect-square max-w-[300px] mx-auto",
        type === "sticky" && "fixed bottom-0 left-0 w-full h-[60px] z-50 bg-zinc-950 border-t border-zinc-800",
        className
      )}
    >
      <div id="frame" style={{ width: '100%', margin: 'auto', position: 'relative', zIndex: 99998 }}>
        <iframe 
          data-aa='2431416' 
          src='//acceptable.a-ads.com/2431416/?size=Adaptive' 
          style={{ border: 0, padding: 0, width: '70%', height: 'auto', overflow: 'hidden', display: 'block', margin: 'auto' }}
        ></iframe>
      </div>
    </div>
  );
}
