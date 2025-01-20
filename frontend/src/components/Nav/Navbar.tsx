"use client";
import LogoIcon from "@/assets/Logo";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import DesktopNav from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export default function Navbar() {

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Me",
      href: "/about",
    },
    {
      name: "My Works",
      href: "/works",
    },
  ];
  return (
    <div className="flex justify-around items-center mx-auto py-5">
      <LogoIcon className="md:w-[120px] w-[80px]" />
      <div className="flex md:gap-10 gap-5 items-center">
        <DesktopNav links={links} className="hidden md:block"/>
        <Link href={"/contact"}>
          <Button className="text-white border border-white hover:text-black hover:bg-white ">
            Contact
          </Button>
        </Link>
        <MobileNav links={links} className="block md:hidden" />
      </div>
    </div>
  );
}
