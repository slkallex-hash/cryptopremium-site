export function JuicyAdsVideo() {
  return (
    <div className="flex justify-center items-center my-8 relative z-10 w-full">
      <div className="w-[308px] h-[286px] bg-zinc-900 border border-white/10 rounded-xl overflow-hidden relative shadow-2xl">
        <span className="absolute top-2 left-2 text-[10px] text-zinc-500 uppercase tracking-widest z-0">
          Advertisement
        </span>
        <iframe
          title="JuicyAds Video Ad"
          width="308"
          height="286"
          scrolling="no"
          frameBorder="0"
          className="relative z-10"
          style={{ border: 'none', overflow: 'hidden' }}
          srcDoc={`
            <!DOCTYPE html>
            <html>
              <head>
                <style>body { margin: 0; padding: 0; background: transparent; overflow: hidden; display: flex; justify-content: center; align-items: center; height: 100vh; }</style>
              </head>
              <body>
                <!-- JuicyAds v3.0 -->
                <script type="text/javascript" data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"></script>
                <ins id="1116250" data-width="308" data-height="286"></ins>
                <script type="text/javascript" data-cfasync="false" async>(adsbyjuicy = window.adsbyjuicy || []).push({'adzone':1116250});</script>
                <!--JuicyAds END-->
              </body>
            </html>
          `}
        />
      </div>
    </div>
  );
}
