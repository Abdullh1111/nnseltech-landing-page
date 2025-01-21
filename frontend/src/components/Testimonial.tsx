import QuteIcon from "@/assets/Qtation";
import TextHeilight from "./ui/TextHeilight";

export default function Testimonial() {
  return (
    <div className="flex flex-col gap-10 lg:my-36 my-10">
      <div className="flex items-center justify-between">
        <h2 className="lg:text-[64px] text-[36px] font-bold">
          <TextHeilight text="Tes" />
          timonial
        </h2>
        <QuteIcon className="w-10 h-10 lg:h-[95px] lg:w-[163px] "/>
      </div>
      <p className="text-lg text-[#949494] max-w-[878px] ">
      “Aaronn was fantastic to work with from start to finish. We were looking for a simple, stand-out logo and he delivered. I tried designing the logo myself thinking I wouldn’t need to pay the money for a professional graphic designer but I was very wrong. Working with Aaronn was worth every penny and was surprisingly affordable! I remember him saying simplicity is key to a successful logo and boy he was right. I can’t thank Aaronn enough for his effort and professionalism. I would recommend him to anyone looking for a design!”
      </p>
      <h3 className="text-2xl font-bold">
      -Martin lee
      </h3>
    </div>
  );
}
