

const ProjectionTab = () => {
  return (
    <div className="font-mono text-sm text-brand-gray flex flex-col gap-3">

        {/* Video 1 */}
        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            
            <iframe
            src="https://player.vimeo.com/video/760480369?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            title="Mazz! An Unscripted Series title sequence"
            />

        </div>
        
        

        {/* Video 2 */}
        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            
            <iframe
            src="https://player.vimeo.com/video/1117850278?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            title="Mazz! An Unscripted Series title sequence"
            />
            
        </div>



    </div>
  );
};

export default ProjectionTab;