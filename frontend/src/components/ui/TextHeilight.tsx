import React from "react";

const TextHeilight = ({ text }: { text: string }) => {
  return (
    <span className="bg-[#ffffff3f] rounded-full shadow-[0_0_100px_#FFFFFF] ">
      {text}
    </span>
  );
};

export default TextHeilight;
