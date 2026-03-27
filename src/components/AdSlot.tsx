import { cn } from "@/lib/utils";
import { Megaphone } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

interface AdSlotProps {
  id: string;
  className?: string;
  type?: "banner" | "square" | "sticky";
  mybidId?: string;
}

export function AdSlot({ id, className, type = "banner", mybidId }: AdSlotProps) {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mybidId && adRef.current && !adRef.current.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://js.mbidadm.com/static/scripts.js";
      script.async = true;
      script.dataset.admpid = "433414";
      
      const adDiv = document.createElement("div");
      adDiv.dataset.bannerId = mybidId;
      
      adRef.current.appendChild(script);
      adRef.current.appendChild(adDiv);
    }
  }, [mybidId]);

  return (
    <div
      id={id}
      className={cn(
        "flex flex-col items-center justify-center bg-zinc-900/30 border border-dashed border-zinc-800 text-zinc-500 overflow-hidden relative group transition-all hover:bg-zinc-900/60 hover:border-emerald-500/30",
        type === "banner" && "w-full min-h-[90px] md:min-h-[120px] rounded-xl",
        type === "square" && "w-full aspect-square max-w-[300px] mx-auto rounded-xl",
        type === "sticky" && "fixed bottom-0 left-0 w-full min-h-[60px] z-50 bg-zinc-950/90 backdrop-blur-md border-t border-solid border-zinc-800",
        className
      )}
    >
      {mybidId ? (
        <div ref={adRef} className="w-full h-full flex items-center justify-center"></div>
      ) : (
        <Link to="/contato" className="flex flex-col items-center justify-center w-full h-full absolute inset-0 z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 group-hover:text-emerald-400 transition-colors">
            <Megaphone className="w-4 h-4" />
            <span>Espaço Publicitário</span>
          </div>
        </Link>
      )}
    </div>
  );
}
