import React from "react";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";

export const BrandLogo = () => {
  return <img src="/logo/LogoWhite.svg" alt="Brand Logo" style={{ height: 40 }} />;
};

import { Link } from "react-router-dom";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { name: "Home", href: "/", icon: "/icons/home.svg" },
    { name: "About Us", href: "/about", icon: "/icons/about.svg" },
    { name: "Contact Us", href: "/contact", icon: "/icons/contact.svg" },
    { name: "FAQs", href: "/faq", icon: "/icons/faq.svg" },
    { name: "Blogs & News", href: "#", icon: "/icons/blog.svg" },
  ];

  return (
    <nav className="px-2 py-5">
      <HeroUINavbar onMenuOpenChange={setIsMenuOpen} className="block w-full rounded-full bg-[#D51C29] pl-5">
        <NavbarContent justify="start">
          <NavbarBrand>
            <Link to="/landing">
              <BrandLogo />
            </Link>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="sm:flex gap-15" justify="center">
          {menuItems.map((item, index) => (
            <Link
              to={item.href}
              key={`${item.name}-${index}`}
              className="flex items-center gap-2 text-white font-semibold"
            >
              <img src={item.icon} className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          ))}
        </NavbarContent>

        <NavbarContent justify="end">
          <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden text-white" />
        </NavbarContent>

        <NavbarMenu className="bg-[#D51C29] bg-opacity-80 mt-2 rounded-xl">
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.name}-${index}`}>
              <Link to={item.href} className="w-full flex items-center gap-4 text-white py-2">
                <img src={item.icon} alt={`${item.name} icon`} className="h-6 w-6" />
                <span className="text-lg font-semibold">{item.name}</span>
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </HeroUINavbar>
    </nav>
  );
}
