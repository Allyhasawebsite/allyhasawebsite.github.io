import { useState } from "react";

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

  return (
    <div className="font-mono text-sm text-[#28282B] flex flex-col gap-0">

      {/* Featured video player */}
      <div className="relative w-full bg-[#28282B]" style={{ paddingTop: "56.25%" }}>
        <iframe
          key={active}
          src={videos[active].src}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          title={videos[active].title}
        />
      </div>

      {/* Video selector strip */}
      <div className="flex border-b border-[#28282B]">
        {videos.map((v, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{ outline: "none" }}
            className={`
              flex-1 flex items-center justify-between px-3 py-2 text-left transition-colors duration-150
              ${i !== videos.length - 1 ? "border-r border-[#28282B]" : ""}
              ${active === i ? "bg-[#28282B] text-[#e0fffe]" : "bg-transparent hover:bg-[#28282B]/10"}
            `}
          >
            <span className="text-[10px] opacity-50 mr-2">{v.tag}</span>
            <span className="flex-1 text-xs font-bold tracking-wide truncate">{v.title}</span>
            <span className="text-[10px] opacity-40 ml-2">{v.year}</span>
          </button>
        ))}
      </div>

      {/* Divider */}
      <div className="overflow-hidden whitespace-nowrap py-2">
        {"=".repeat(120)}
      </div>

      {/* Description */}
      <div className="flex gap-4 pt-4 pb-1">

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