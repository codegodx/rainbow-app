"use client"

import * as React from "react";
import { pressStart } from "@/config/fonts";
import Link from "next/link";
import { usePathname } from 'next/navigation';



export function Nav({
  MenuLink,
}: {
MenuLink: {
    name: string;
    link: string;
    icon?: React.ReactNode;
    
  }[];
}) {
    const pathname = usePathname();
   
  return (
    <nav className="godx-w-full godx-hidden md:godx-block ">
      <div
        className={`${pressStart.className} godx-w-full godx-flex godx-justify-between godx-items-center godx-px-4 godx-h-10 godx-bg-slate-950 godx-border-b godx-border-stone-100 `}
      >
        {MenuLink.map((item, index) => (
          <Link
            className={`godx-flex godx-group godx-items-center ${pathname === item.link ? " godx-text-cyan-500" : "godx-text-gray-200"}`}
            key={index}
            href={item.link}
          >
            <span className="godx-text-sm godx-font-bold godx-mx-2">
              {item.icon}
            </span>
            <p className ="group-hover:godx-translate-x-1 godx-duration-75 ">
              {item.name}
            </p>
          </Link>
        ))}
      </div>
    </nav>
  );
}


