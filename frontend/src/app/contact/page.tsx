import Laptop from "@/assets/Laptop";
import { ContactForm } from "@/components/ContactForm";
import TextHeilight from "@/components/ui/TextHeilight";
import React from "react";

export default function Contact() {
  return (
    <div className=" md:my-40 my-20">
      <h3 className="text-4xl md:text-[72px] font-bold">
        <TextHeilight text="Contact" /> Me
      </h3>
      <p className="md:text-lg text-base text-[#949494] mt-10">
        For Any Project Knock Us
      </p>
      <div className=" h-[2px] bg-white my-10 lg:my-36"></div>
      <div className="flex flex-col md:flex-row items-center lg:my-36">
      <h3 className="flex-1 text-[28px] md:text-[64px] my-10 font-bold">Get in <br className="hidden md:block"/> Touch With <br className="hidden md:block"/> Us</h3>
      <ContactForm className="flex-1" />
      </div>
      <Laptop className="w-full" />

      <div className="flex flex-col gap-10 lg:gap-0 text-center lg:flex-row justify-evenly  lg:my-36">
        <p className="md:text-2xl text-xl font-bold">Street Avenue 21, CA</p>
        <p className="md:text-2xl text-xl font-bold">+9 0283353</p>
        <p className="md:text-2xl text-xl font-bold underline">info@aaronn.com</p>
      </div>
    </div>
  );
}
