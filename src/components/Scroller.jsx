const headerContent = [
  { message: "✧✧ welcome to ally's motion media website where you can find some fun stuff :) ✧✧" },
  { message: "✧ this website was made by Ally's brother - Aronn ✧"}
]

const Scroller = () => {
  
  const items = [...headerContent, ...headerContent, ...headerContent];

  return (
    <div className="w-full overflow-hidden bg-brand-light py-1 mt-[3%]">
      <div className="flex w-max animate-infinite-scroll">

        {items.map((item, i) => (
          <p key={i} className="text-brand-gray whitespace-nowrap font-mono">
            {item.message}
          </p>
        ))}

      </div>
    </div>
  );
};

export default Scroller;
