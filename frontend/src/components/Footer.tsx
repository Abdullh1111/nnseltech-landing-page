import LogoIcon from "@/assets/Logo";
import React from "react";
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#131313] text-center py-20">
      <p className="text-secondary md:text-2xl text-xl font-bold">
        Get in Touch With Us
      </p>
      <h4 className="underline md:text-[64px] text-4xl font-bold mt-10 my-36 ">
        info@aaronn.com
      </h4>
      <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-around items-center text-2xl font-bold ">
        <LogoIcon width={230} />
        <div>
          <p>Street Avenue 21, CA</p>
          <p className="mt-5">0-8-00-888-000</p>
        </div>
        <div>
          <p>+9 0283353</p>
          <div className="flex items-center gap-5 mt-5">
            <Link href="https://www.facebook.com/">
              <ImFacebook2 size={25} />
            </Link>
            <Link href="https://www.instagram.com/">
              <FaInstagramSquare size={25} />
            </Link>
            <Link href="https://twitter.com/">
              <FaTwitterSquare size={25} />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-[80%] h-[1px] bg-[#949494] mx-auto md:my-20 my-10 "></div>
      <p className="md:text-2xl text-lg font-bold ">
        © 2023. Ideapeel. All rights reserved.{" "}
      </p>
    </div>
  );
}
