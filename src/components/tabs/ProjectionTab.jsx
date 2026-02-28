

const ProjectionTab = () => {
  return (
    <div className="font-mono text-sm text-brand-gray flex flex-col gap-3">

        {/* Video 1 */}
        <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            
            <iframe
            src="https://player.vimeo.com/video/1117850278?h=62682ba35f"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            title="Caliza projection 2025"
            />

        </div>

        {/* Divider rows */}
        <div className="flex flex-col">
          <p className="tracking-widest text-[#28282B] overflow-hidden whitespace-nowrap">
            {"=".repeat(70)}
          </p>
          <p className="tracking-widest text-[#28282B] overflow-hidden whitespace-nowrap">
            {"=".repeat(70)}
          </p>

          <p className="tracking-widest text-[#28282B] overflow-hidden whitespace-nowrap">
            {"=".repeat(70)}
          </p>
        </div>

        {/* Projection section */}
        <div className="flex gap-6">

          {/* Left label */}
          <span className="font-bold text-xl whitespace-nowrap"> Projection <br/> Mapping </span>

          {/* Right content */}
          <div className="flex flex-col gap-4 text-left">

            <p className="leading-relaxed">
              A modernized display of ancient Chinese armory and calligraphy..
            </p>

            <p className="leading-relaxed">
              Modelled and animated in 3D, the armory design is referenced from ancient Chinese designs. While the typography is written by hand on Procreate to give a more natural feel.
            </p>

            <p className="leading-relaxed">
              This was also a chance for me to explore forming my own music with Launchpad on iPad.
            </p>

          </div>

        </div>
        




    </div>
  );
};

export default ProjectionTab;