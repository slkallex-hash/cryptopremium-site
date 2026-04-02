export function ExoClickBanner({ zoneId = "5888982", width = "300", height = "250" }: { zoneId?: string, width?: string, height?: string }) {
  return (
    <div className="flex justify-center items-center my-8">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div 
          className="relative flex justify-center items-center bg-zinc-900 border border-white/5 rounded-xl overflow-hidden"
          style={{ width: `${width}px`, height: `${height}px` }}
        >
          <iframe
            title={`ExoClick Ad ${zoneId}`}
            width={width}
            height={height}
            scrolling="no"
            frameBorder="0"
            style={{ border: 'none', overflow: 'hidden' }}
            srcDoc={`
              <!DOCTYPE html>
              <html>
                <head>
                  <style>body { margin: 0; padding: 0; background: transparent; display: flex; justify-content: center; align-items: center; height: 100vh; }</style>
                </head>
                <body>
                  <!-- Placeholder for ExoClick Banner -->
                  <script type="application/javascript" src="https://syndication.exoclick.com/tag.php?obj=${zoneId}"></script>
                  <div style="color: #555; font-family: sans-serif; font-size: 10px; text-transform: uppercase; letter-spacing: 1px;">Publicidade ExoClick</div>
                </body>
              </html>
            `}
          />
        </div>
      </div>
    </div>
  );
}
