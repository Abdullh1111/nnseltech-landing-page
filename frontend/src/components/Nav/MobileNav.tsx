"use client";
import * as React from "react";
import { FiAlignJustify } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

type params = {
  links: {
    name: string;
    href: string;
  }[];
  className?: string;
};

export function MobileNav({ links, className, ...props }: params) {
  return (
    <div className={className} {...props}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button>
            <FiAlignJustify />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuRadioGroup>
            {links.map((link) => (
              <Link href={link.href} key={link.name}>
                <DropdownMenuRadioItem value={link.href}>
                  {link.name}
                </DropdownMenuRadioItem>
              </Link>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
