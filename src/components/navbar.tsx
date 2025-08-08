import React from "react";
import { Navbar as HeroUINavbar, NavbarBrand, NavbarContent, NavbarMenuToggle, NavbarMenu } from "@heroui/navbar";

export const BrandLogo = () => {
  return <img src="/logo/Logo.svg" alt="Brand Logo" style={{ height: 40 }} />;
};

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="px-2 py-5">
      <HeroUINavbar onMenuOpenChange={setIsMenuOpen} className="block w-full rounded-full  bg-red/[0.46]">
        <NavbarContent justify="start">
          <NavbarBrand>
            <BrandLogo />
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className=" hidden sm:flex gap-4" justify="center">
          {/*Add Items for navbar as we grow */}
        </NavbarContent>
        <NavbarContent justify="end">
          {/**Add the contents later */}
          <NavbarMenuToggle
            icon={
              isMenuOpen ? undefined : (
                <div className="flex flex-col gap-1">
                  <div className="w-5 h-0.5 bg-[#FFF5DB]"></div>
                  <div className="w-5 h-0.5 bg-[#FFF5DB]"></div>
                  <div className="w-5 h-0.5 bg-[#FFF5DB]"></div>
                </div>
              )
            }
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden border border-white   rounded-full w-9 h-9"
          />
        </NavbarContent>
        <NavbarMenu>
          {/* {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? "primary"
                    : index === menuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))} */}
        </NavbarMenu>
      </HeroUINavbar>
    </nav>
  );
}
