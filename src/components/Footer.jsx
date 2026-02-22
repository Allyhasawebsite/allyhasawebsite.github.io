import React from 'react';

const headerContent = [
  { message: "welcome to ally's motion media website where you can find some fun stuff :)" },
  { message: "this website was made by Allyanna's brother - Aronn"}
]

const Footer = () => {
  
  return (
      <div className="overflow-hidden bg-black flex">

      <ul className="flex gap-10 bg-black text-white py-4 animate-infinite-scroll">
        {[...headerContent, ...headerContent].map((item) => {

          return (
          <li className="flex gap-2">
            <p className="text-gray-100"> {item.message} </p>
          </li>
        )})}
      </ul>

      </div>
  );
};

export default Footer;
