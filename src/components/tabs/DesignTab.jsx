const DesignTab = () => {
  return (
    <div className="font-mono text-sm text-brand-gray flex flex-col gap-3">
      
       
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        
        <iframe
          src="https://player.vimeo.com/video/1164942617?badge=0&autopause=0&player_id=0&app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          title="Mazz! An Unscripted Series title sequence"
        />

      </div>

      {/* Divider rows */}
      <div className="flex flex-col">
        <p className="tracking-widest text-[#28282B] overflow-hidden whitespace-nowrap">
          {"=".repeat(70)}
        </p>
      </div>

      {/* Design section */}
      <div className="flex gap-6">

        {/* Left label */}
        <span className="font-bold text-2xl whitespace-nowrap">Design </span>

        {/* Right content */}
        <div className="flex flex-col gap-4 text-left">

          <p className="leading-relaxed">
            A title sequence design for an unreleased SCAD film series, Mazz is a self-involved girl that has encounters with people, as she breaks the fourth wall, the nature of the show invites her and the audience to reflect on themselves.
          </p>

          <p className="leading-relaxed">
            The inspiration for the animation style was a combination of Duck Amuck, Gertie the Dinosaur and Out of The Ink Well. These animation shorts have characters that are self-aware and interact with the audience in a humorous way. The goal was to capture the spirit of these animations and apply it to Mazz.
          </p>

          <p className="leading-relaxed">
            To give the title design a playful look,  I used paper textures from a composition notebook, reminiscing title sequences from Spider-man Homecoming, Far From Home and the TV show Community. In addition, a cartoony style was used to design the character, reminding the audience of characters like Lizze Maguire, or Miss Minutes from Loki.
          </p>

        </div>

      </div>

      {/* Process Book Link */}
      <a
        href="https://odd-windshield-52a.notion.site/Typography-31b10c01ab8680dca5d0da18ae1431e4"
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
              ✦ MORE TYPOGRAPHY WORKS
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
              TYPOGRAPHY 
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

export default DesignTab;