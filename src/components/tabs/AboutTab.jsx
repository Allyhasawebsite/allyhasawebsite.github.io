const AboutTab = () => {
  return (
    <div className="font-mono text-sm text-[#28282B] flex flex-col gap-4">

      {/* Divider rows */}
      <div className="flex flex-col">
        <p className="tracking-widest text-[#28282B] overflow-hidden whitespace-nowrap">
          {"=".repeat(50)}
        </p>
        <p className="tracking-widest text-[#28282B] overflow-hidden whitespace-nowrap">
          {"=".repeat(50)}
        </p>
      </div>

      {/* About Me section */}
      <div className="flex gap-6">

        {/* Left label */}
        <span className="font-bold whitespace-nowrap">About Me</span>

        {/* Right content */}
        <div className="flex flex-col gap-4 text-left">
          <p className="font-bold">Alright, let's do this one last time!</p>

          <p className="leading-relaxed">
            My name is Allyanna Laurel and I'm a motion designer
            fueled by food and film. My interest in cinema and
            cuisine influences how I approach my work
            and thought process.
          </p>

          <p className="leading-relaxed">
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
        className="w-full rounded-md object-cover"
      />

    </div>
  );
};

export default AboutTab;