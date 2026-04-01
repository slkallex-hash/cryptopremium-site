export function JuicyAdsGrid() {
  return (
    <div className="w-full pt-32 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-white/5"></div>
          <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">Publicidade</span>
          <div className="h-px flex-1 bg-white/5"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex justify-center items-center w-[300px] h-[250px] bg-zinc-900/30 border border-white/5 rounded-xl overflow-hidden relative">
              <iframe
                title={`JuicyAds ${i}`}
                width="300"
                height="250"
                scrolling="no"
                frameBorder="0"
                style={{ border: 'none', overflow: 'hidden' }}
                srcDoc={`
                  <!DOCTYPE html>
                  <html>
                    <head>
                      <style>body { margin: 0; padding: 0; background: transparent; }</style>
                    </head>
                    <body>
                      <script type="text/javascript" data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"></script>
                      <ins id="1114474" data-width="300" data-height="250"></ins>
                      <script type="text/javascript" data-cfasync="false" async>(adsbyjuicy = window.adsbyjuicy || []).push({'adzone':1114474});</script>
                    </body>
                  </html>
                `}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
