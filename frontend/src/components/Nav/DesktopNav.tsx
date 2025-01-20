import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type params = {
  links: {
    name: string;
    href: string;
  }[];
  className?: string;
};

export default function DesktopNav({ links, className, ...params }: params) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className={className} {...params}>
      <ul className="flex gap-10 items-center font-medium text-sm text-gray-400">
        {links.map((link) => (
          <li
            key={link.name}
            className={`${
              pathName === link.href ? "text-white underline" : ""
            } hover:text-white `}
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
