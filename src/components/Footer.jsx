import React from 'react';

const headerContent = [
  { message: "✧✧ welcome to ally's motion media website where you can find some fun stuff :) ✧✧" },
  { message: "✧ this website was made by Ally's brother - Aronn ✧"}
]

const Footer = () => {
  
  const items = [...headerContent, ...headerContent, ...headerContent];

  return (
    <div className="w-full overflow-hidden bg-brand-light">
      <div className="flex w-max animate-infinite-scroll py-4">

        {items.map((item, i) => (
          <p key={i} className="text-brand-gray whitespace-nowrap">
            {item.message}
          </p>
        ))}

      </div>
    </div>
  );
};

export default Footer;
