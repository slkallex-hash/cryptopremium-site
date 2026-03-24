import { cn } from "@/lib/utils";
import { Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

interface AdSlotProps {
  id: string;
  className?: string;
  type?: "banner" | "square" | "sticky";
  zoneId?: string;
}

declare global {
  interface Window {
    AdProvider: any[];
  }
}

export function AdSlot({ id, className, type = "banner", zoneId = "5880760" }: AdSlotProps) {
  useEffect(() => {
    try {
      (window.AdProvider = window.AdProvider || []).push({ serve: {} });
    } catch (e) {
      console.error("AdProvider error:", e);
    }
  }, [id]);

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center bg-zinc-900/30 border border-dashed border-zinc-800 text-zinc-500 overflow-hidden relative group transition-all hover:bg-zinc-900/60 hover:border-emerald-500/30",
        type === "banner" && "w-full h-[90px] md:h-[120px] rounded-xl",
        type === "square" && "w-full aspect-square max-w-[300px] mx-auto rounded-xl",
        type === "sticky" && "fixed bottom-0 left-0 w-full h-[60px] z-50 bg-zinc-950/90 backdrop-blur-md border-t border-solid border-zinc-800",
        className
      )}
    >
      {/* ExoClick Ad Unit */}
      <ins className="eas6a97888e10" data-zoneid={zoneId}></ins>

      <Link to="/contato" className="flex flex-col items-center justify-center w-full h-full absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 group-hover:text-emerald-400 transition-colors">
          <Megaphone className="w-4 h-4" />
          <span>Espaço Publicitário</span>
        </div>
      </Link>
    </div>
  );
}
