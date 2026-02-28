import { useState } from "react";

const AboutTab = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    // relative + pb to make room for the pinned status bar
    <div className="font-mono text-sm text-[#28282B] flex flex-col gap-4 relative pb-10">

      {/* Divider */}
      <div className="flex flex-col overflow-hidden">
        <p className="whitespace-nowrap">{"=".repeat(80)}</p>
        <p className="whitespace-nowrap">{"=".repeat(80)}</p>
      </div>

      {/* About Me */}
      <div className="flex gap-4">
        <span className="font-bold whitespace-nowrap min-w-[64px]">About Me</span>
        <div className="flex flex-col gap-3 text-[#28282B]/80">
          <p className="font-bold text-[#28282B]">Alright, let's do this one last time!</p>
          <p>
            My name is Allyanna Laurel and I'm a motion designer
            fueled by food and film. My interest in cinema and
            cuisine influences how I approach my work and thought process.
          </p>
          <p>
            Come take a glimpse into my motion design journey,
            through trials and errors, and daring to learn new
            things, I found joy within the process.
          </p>
        </div>
      </div>

      {/* Image */}
      <img
        src="/images/aboutPic.png"
        alt="About me"
        className="w-full object-cover"
        style={{ borderRadius: "4px" }}
      />

      

    </div>
  );
};

export default AboutTab;