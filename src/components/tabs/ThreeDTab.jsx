import { useState, useEffect } from "react";

const videos = [
  {
    src: "https://player.vimeo.com/video/1117850278?badge=0&autopause=0&player_id=0&app_id=58479",
    title: "Caliza Projection",
    year: "2025",
    tag: "01",
  },
  {
    src: "https://player.vimeo.com/video/760480369?badge=0&autopause=0&player_id=0&app_id=58479",
    title: "3D Demo Reel",
    year: "2022",
    tag: "02",
  },
];

const ThreeDTab = () => {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' && window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="font-mono text-sm text-[#28282B] flex flex-col gap-0">

      {/* Featured video player */}
      <div className="relative w-full bg-[#28282B]" style={{ paddingTop: "56.25%" }}>
        <iframe
          key={active}
          src={videos[active].src}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          title={videos[active].title}
        />
      </div>

      {/* Video selector */}
      <div className="flex border-b border-[#28282B] bg-[#e0fffe]">
        {videos.map((v, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{ outline: "none" }}
            className={`
              flex-1 flex items-center justify-between gap-2 px-4 py-2 text-left transition-colors duration-150 min-w-0
              ${i !== videos.length - 1 ? "border-r border-[#28282B]" : ""}
              ${active === i ? "bg-[#28282B] text-[#e0fffe]" : "bg-transparent hover:bg-[#28282B]/10"}
            `}
          >
            <span className={`opacity-50 flex-shrink-0 ${isMobile ? "text-[9px]" : "text-[10px]"}`}>{v.tag}</span>
            <span className={`flex-1 font-bold tracking-wide truncate ${isMobile ? "text-[9px]" : "text-xs"}`}>{v.title}</span>
            <span className={`opacity-40 flex-shrink-0 ${isMobile ? "text-[9px]" : "text-[10px]"}`}>{v.year}</span>
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="overflow-hidden whitespace-nowrap py-2 text-[#28282B]/30 bg-[#e0fffe] px-4">
        <span style={{ fontSize: isMobile ? "10px" : "12px" }}>{"=".repeat(isMobile ? 55 : 110)}</span>
      </div>

      {/* Description */}
      <div className="flex gap-4 pt-4 pb-1 bg-[#e0fffe] px-4">

        <div className="flex flex-col text-right items-start gap-0 min-w-[60px]">
          <span className="font-black text-lg leading-none">3D <br/> Works </span>
        </div>

        <div className="w-px bg-[#28282B]/20 self-stretch mx-1" />

        <div className="flex text-left flex-col gap-3 text-[#28282B]/80 leading-relaxed">
          <p>
            For a senior capstone film, I designed, modelled, and textured 3D backgrounds in Blender —
            achieving a 2D look on a fully 3D world.
          </p>
          <p>
            These skills translated directly into my projection mapping work,
            adding depth and dimension to the visuals.
          </p>
        </div>

      </div>

    </div>
  );
};

export default ThreeDTab;