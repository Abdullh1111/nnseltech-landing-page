import { GrLinkNext } from "react-icons/gr";
import { Button } from "@/components/ui/button";
import TextHeilight from "@/components/ui/TextHeilight";
import Link from "next/link";

export default function Header() {
  return (
    <div className="text-center">
      <h2 className="lg:text-[72px] text-[48px]  font-bold text-center lg:mt-36 mt-20">
        Adaptive Logo <TextHeilight text="Design" /> <br /> for Your Brand
      </h2>
      <Link href="/about">
      <Button variant={"secondary"} className="lg:mt-20 mt-10">
        Explore works <GrLinkNext />
      </Button>
      </Link>
    </div>
  );
}
