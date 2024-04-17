import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import HeaderNavbarContent from "./headerNavbarContent";
import ThemeSwitcher from "./themeSwitcher";

export default function Header() {
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">Shadow Lantern</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <HeaderNavbarContent />
      </NavbarContent>

      <NavbarContent justify="end">
        <ThemeSwitcher />
      </NavbarContent>
    </Navbar>
  );
}
