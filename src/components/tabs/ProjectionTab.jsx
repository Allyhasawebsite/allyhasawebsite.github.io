

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
      </div>

      {/* Projection section */}
      <div className="flex gap-6">

        {/* Left label */}
        <span className="font-bold text-right text-xl whitespace-nowrap"> Projection <br/> Mapping </span>

        <div className="w-px bg-[#28282B]/20 self-stretch mx-1" />

        {/* Right content */}
        <div className="flex flex-col gap-4 text-left">

          <p className="leading-relaxed">
            A modernized display of ancient Chinese armory and calligraphy.
          </p>

          <p className="leading-relaxed">
            Modelled and animated in 3D, the armory design is referenced from ancient Chinese designs. While the typography is written by hand on Procreate to give a more natural feel.
          </p>

          <p className="leading-relaxed">
            This was also a chance for me to explore forming my own music with Launchpad on iPad.
          </p>

        </div>

      </div>

      {/* Process Book Link */}
      <a
        href="https://odd-windshield-52a.notion.site/Hair-Is-Everything-31a10c01ab86807eb724fc560bc41145?pvs=73"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >
        <div
          style={{
            border: "1px solid #8b8b8b",
            borderRadius: "4px",
            padding: "14px 18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            backgroundColor: "#f7feff",
            transition: "background-color 0.15s",
          }}
          onMouseEnter={e => e.currentTarget.style.backgroundColor = "#e0fffe"}
          onMouseLeave={e => e.currentTarget.style.backgroundColor = "#f7feff"}
        >
          {/* Left side */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            <span
              style={{
                fontSize: "9px",
                letterSpacing: "0.2em",
                color: "#8b8b8b",
                textTransform: "uppercase",
              }}
            >
              ✦ MORE PROJECTION MAPPING WORK
            </span>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "700",
                color: "#28282B",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              HAIR IS EVERYTHING PROCESS BOOK
            </span>
          </div>

          {/* Right arrow */}
          <span
            style={{
              fontSize: "16px",
              color: "#8b8b8b",
              letterSpacing: "-2px",
            }}
          >
            ──→
          </span>
        </div>
      </a>
        

    </div>
  );
};

export default ProjectionTab;