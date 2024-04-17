"use client";

import { NavbarItem, Link } from "@nextui-org/react";
import { Links, LinkType } from "@/app/_path/link";
import { usePathname } from "next/navigation";
export default function HeaderNavbarContent() {
  const pathName = usePathname();
  return (
    <>
      {Links.map((link: LinkType, index) => {
        const isActive = pathName === link.href;

        return (
          <NavbarItem key={index}>
            <Link
              isBlock
              color="foreground"
              href={link.href}
              className={
                isActive
                  ? "border-b border-b-blue-500 text-blue-500 font-bold"
                  : ""
              }
            >
              {link.label}
            </Link>
          </NavbarItem>
        );
      })}
    </>
  );
}
