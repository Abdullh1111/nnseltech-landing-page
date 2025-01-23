import TextHeilight from "@/components/ui/TextHeilight";
import React from "react";

export default function About() {
  return (
    <div className=" md:my-40 my-20">
      <h3 className="text-4xl md:text-[72px] font-bold">
        <TextHeilight text="Contact" /> Me
      </h3>
      <p className="md:text-lg text-base text-[#949494] mt-10">
        For Any Project Knock Us
      </p>
      <div className=" h-[2px] bg-white my-20"></div>
    </div>
  );
}
