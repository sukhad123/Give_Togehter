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
  return <img src="/logo/LogoWhite.svg" alt="Give Together" className="h-10 w-auto" />;
};

import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const location = useLocation();

  const menuItems = [
    {
      name: "Home",
      href: "/",
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M3 11.5L12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V11.5z" />
        </svg>
      ),
    },
    {
      name: "About Us",
      href: "/about",
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 12a5 5 0 100-10 5 5 0 000 10zm0 2c-4.418 0-8 2.239-8 5v1h16v-1c0-2.761-3.582-5-8-5z" />
        </svg>
      ),
    },
    {
      name: "Contact Us",
      href: "/contact",
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M21 8V7l-3 2-2-1-7 5v3l2 1 8-6 3 1V8zM3 6v11a2 2 0 002 2h12" />
        </svg>
      ),
    },
    {
      name: "FAQs",
      href: "/faq",
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 15h-2v-2h2v2zm1.07-7.75l-.9.92A2 2 0 0012 12h-1v-1a2 2 0 011-1.72c.7-.35 1-1 1-1.78 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.2-.55 2-1.93 2.75z" />
        </svg>
      ),
    },
    {
      name: "Blogs & News",
      href: "/landing",
      icon: (
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M3 5a2 2 0 012-2h14a2 2 0 012 2v2H3V5zm0 4h18v8a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        </svg>
      ),
    },
  ];

  return (
    <nav className="py-5">
      <div className="container mx-auto px-6">
        <HeroUINavbar onMenuOpenChange={setIsMenuOpen} className="w-full rounded-full bg-[#D51C29] px-6 py-3">
          <NavbarContent justify="start">
            <NavbarBrand>
              <Link to="/landing" className="flex items-center">
                <BrandLogo />
              </Link>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden md:flex items-center justify-center space-x-10" justify="center">
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  to={item.href}
                  key={`${item.name}-${index}`}
                  className={`flex items-center gap-3 text-white font-semibold px-3 py-2 ${isActive ? "bg-white/20 rounded-full" : "hover:bg-white/10 rounded-full"}`}
                >
                  <span
                    className={`bg-white/20 rounded-full p-2 flex items-center justify-center ${isActive ? "opacity-100" : "opacity-90"}`}
                  >
                    {item.icon}
                  </span>
                  <span className="ml-2 whitespace-nowrap">{item.name}</span>
                </Link>
              );
            })}
          </NavbarContent>

          <NavbarContent justify="end" className="md:hidden">
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="text-white" />
          </NavbarContent>

          <NavbarMenu className="bg-[#D51C29] bg-opacity-80 mt-2 rounded-xl md:hidden">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item.name}-${index}`}>
                <Link to={item.href} className="w-full flex items-center gap-4 text-white py-2">
                  <span className="h-6 w-6 flex items-center justify-center">{item.icon}</span>
                  <span className="text-lg font-semibold">{item.name}</span>
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </HeroUINavbar>
      </div>
    </nav>
  );
}
