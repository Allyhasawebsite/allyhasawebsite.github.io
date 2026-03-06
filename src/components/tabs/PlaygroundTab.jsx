const photos = [
  { src: "/images/playground/0 Cake.PNG", caption: "Swiss Roll", medium: "Colour pencil & Procreate" },
  { src: "/images/playground/0 Toast.PNG", caption: "Toast", medium: "Colour pencil & Procreate" },
  { src: "/images/playground/1 Aura.jpg", caption: "Aura", medium: "Procreate & Photoshop" },
  { src: "/images/playground/1 goodVibes.jpg", caption: "Good Vibes Poster", medium: "Procreate & Photoshop" },
  { src: "/images/playground/1 touchGrass.jpg", caption: "Touch Grass Poster", medium: "Procreate & Photoshop" },
  { src: "/images/playground/2 IMG_0727.jpg", caption: "Stateside 1", medium: "Procreate, AfterEffect, Madmapper" },
  { src: "/images/playground/2 IMG_0728.jpg", caption: "Stateside 2", medium: "Procreate, AfterEffect, Madmapper" },
];

const PhotoCard = ({ src, caption, medium }) => {
  return (
    <div className="relative group overflow-hidden rounded-sm break-inside-avoid mb-2">

      {/* Photo */}
      <img
        src={src}
        alt={caption}
        className="w-full object-cover block transition-all duration-300 group-hover:brightness-50"
      />

      {/* Hover caption overlay */}
      <div className="
        absolute inset-0 flex flex-col justify-end p-2
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
      ">
        <span className="font-mono text-[#e0fffe] text-xs font-bold leading-snug">
          {caption}
        </span>
        <span className="font-mono text-[#e0fffe]/60 text-[10px]">
          {medium}
        </span>
      </div>

    </div>
  );
};

const PlaygroundTab = () => {
  return (
    <div className="font-mono text-sm text-[#28282B] flex flex-col gap-4">

      {/* Header divider */}
      <div className="flex flex-col overflow-hidden">
        <div className="whitespace-nowrap">{"=".repeat(120)}</div>
        <div className="whitespace-nowrap">{"=".repeat(120)}</div>
      </div>

      {/* Label row */}
      <div className="flex items-baseline gap-6">
        <span className="font-bold whitespace-nowrap">Photography</span>
        <span className="text-[#28282B]/40 text-[10px] tracking-widest">HOVER TO REVEAL</span>
      </div>

      {/* Masonry grid — 2 columns */}
      <div className="columns-2 gap-2">
        {photos.map((photo, i) => (
          <PhotoCard key={i} {...photo} />
        ))}
      </div>

    </div>
  );
};

export default PlaygroundTab;