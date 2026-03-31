import { useEffect, useRef } from "react";

export function AdBanner() {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // O script fornecido pelo usuário
    const script = document.createElement("script");
    script.dataset.zone = "10808804";
    script.src = "https://n6wxm.com/vignette.min.js";
    
    // Anexando ao body conforme o script original faz
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div ref={adRef} className="w-full min-h-[100px] bg-zinc-900/50 border border-white/5 rounded-2xl flex items-center justify-center flex-col text-zinc-600 my-8 p-4">
      <span className="text-[10px] uppercase tracking-widest mb-2 opacity-50">Publicidade</span>
      <div className="w-full flex items-center justify-center text-sm">
        Native Ad Banner
      </div>
    </div>
  );
}
