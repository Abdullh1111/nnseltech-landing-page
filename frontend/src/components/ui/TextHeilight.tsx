import React from "react";

const CircularGradient = ({ text }: { text: string }) => {
  return (
    <span className="bg-[#FFFFFF2E] rounded-full shadow-[0_0_100px_#FFFFFF] ">
      {text}
    </span>
  );
};

export default CircularGradient;
