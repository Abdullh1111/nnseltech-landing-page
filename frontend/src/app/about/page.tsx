import About2Icon from "@/assets/About2";
import HomeAboutIcon from "@/assets/HomeAboutIcon";
import TextHeilight from "@/components/ui/TextHeilight";
import React from "react";

export default function About() {
  return (
    <div className=" md:my-40 my-20">
      <h3 className="text-4xl md:text-[72px] font-bold">
        <TextHeilight text="About" /> Me
      </h3>
      <p className="md:text-lg text-base text-[#949494] mt-10">
        Little Brief About Myself
      </p>
      <div className=" h-[2px] bg-white my-20"></div>

      <div className="flex flex-col gap-20 lg:flex-row items-center lg:my-36">
        <h3 className="flex-1 text-[28px] md:text-[64px] font-bold">
          My mission is to make design easier.
        </h3>
        <p className="flex-1 text-[#949494] text-[21px] font-semibold ">
          Create custom Designs with AARONN that converts more visitors than any
          website. With lots of unique design, you can easily select a logo
          without hassle. Create custom landing logos with AARONN that converts
          more visitors than any website. With lots of revisions, you can easily
          build a logo without porbolem.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 items-center lg:my-36 my-10 mx-auto">
        <div className="relative">
          <div className="w-[40px] h-[140px] border absolute border-secondary rounded-3xl left-[-15px] xl:top-0 lg:top-16 md:top-0 top-16  "></div>

          <HomeAboutIcon className="w-full" />
        </div>
        <div className="relative">
          <div className="w-[140px] h-[40px] border border-secondary absolute rounded-3xl right-0 xl:bottom-[-15px] lg:bottom-20 md:bottom-9 bottom-32"></div>
          <About2Icon className="w-full" />
        </div>
      </div>

      <h3 className="text-4xl md:text-[48px] font-bold">Follow me on:</h3>
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-evenly mt-10 lg:mt-36 text-[#949494] text-[20px]  lg:text-[32px] ">
        <p> Dribble </p>
        <p> Twitter</p>
        <p>Facebook </p>
        <p> Instagram </p>
      </div>
    </div>
  );
}
