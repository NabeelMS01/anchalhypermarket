"use client";

import { useState } from "react";
import Image from "next/image";
import { Clock, MapPin, Menu, Phone, ShoppingBag, X } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { BUSINESS } from "@/lib/business";

const NavLinks = [
  { title: "Home", link: "#Homepage" },
  { title: "Products", link: "#products" },
  { title: "Reviews", link: "#reviews" },
  { title: "About", link: "#about" },
  { title: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top info bar */}
      <div className="bg-brand-600 text-white text-xs sm:text-sm">
        <MaxWidthWrapper>
          <div className="flex h-9 items-center justify-center gap-6 md:justify-between">
            <p className="hidden md:flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              {BUSINESS.address}
            </p>
            <p className="flex items-center gap-1.5 font-medium">
              <Clock className="h-3.5 w-3.5 shrink-0" />
              {BUSINESS.openDays}, {BUSINESS.hours}
            </p>
            <a
              href={BUSINESS.phoneHref}
              className="flex items-center gap-1.5 hover:underline"
            >
              <Phone className="h-3.5 w-3.5 shrink-0" />
              {BUSINESS.phone}
            </a>
          </div>
        </MaxWidthWrapper>
      </div>

      {/* Main nav */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <MaxWidthWrapper>
          <div className="flex h-16 items-center justify-between">
            <a href="#Homepage" className="flex items-center gap-2">
              <Image
                src="/logo/logo_malayalam.svg"
                alt={BUSINESS.name}
                width={64}
                height={48}
                priority
              />
              <span className="sr-only">{BUSINESS.name}</span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {NavLinks.map((nav) => (
                <a
                  key={nav.title}
                  href={nav.link}
                  className="px-4 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                >
                  {nav.title}
                </a>
              ))}
              <a
                href={BUSINESS.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-brand-500 text-white hover:bg-brand-600 transition-colors shadow-sm"
              >
                <ShoppingBag className="h-4 w-4" /> Order Online
              </a>
            </div>

            {/* Mobile: order button always visible + menu button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={BUSINESS.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-sm font-semibold bg-brand-500 text-white shadow-sm"
              >
                <ShoppingBag className="h-4 w-4" /> Order Online
              </a>
              <button
                type="button"
                className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
                onClick={() => setMenuOpen((open) => !open)}
                aria-expanded={menuOpen}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
              >
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </MaxWidthWrapper>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white shadow-lg">
            <div className="px-4 py-3 flex flex-col gap-1">
              {NavLinks.map((nav) => (
                <a
                  key={nav.title}
                  href={nav.link}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-700"
                >
                  {nav.title}
                </a>
              ))}
              <div className="mt-2 mb-1 flex flex-col gap-2">
                <a
                  href={BUSINESS.shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold bg-brand-500 text-white"
                >
                  <ShoppingBag className="h-4 w-4" /> Order Online — Home Delivery
                </a>
                <div className="flex gap-2">
                  <a
                    href={BUSINESS.phoneHref}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold border border-brand-500 text-brand-700"
                  >
                    <Phone className="h-4 w-4" /> Call Us
                  </a>
                  <a
                    href={BUSINESS.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold border border-brand-500 text-brand-700"
                  >
                    <MapPin className="h-4 w-4" /> Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
