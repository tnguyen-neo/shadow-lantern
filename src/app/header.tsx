import { Links, LinkType } from "./_path/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function Header() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Shadow Lantern</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        {Links.map((link: LinkType, index) => (
          <NavbarItem key={index}>
            <Link isBlock color="foreground" href={link.href}>
              {link.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <ThemeSwitcher />
      </NavbarContent>
    </Navbar>
  );
}
