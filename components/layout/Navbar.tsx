"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-blue-dark/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-10 flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/images/logo-sticker.png"
            alt="Steve Camp for City Council"
            width={32}
            height={32}
            className="h-8 w-auto brightness-0 invert rounded"
          />
          <span className="text-white text-sm tracking-wide lowercase">
            steve camp
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.filter((link) => link.href !== "#donate").map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-white/70 hover:text-white transition-colors lowercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            className="bg-red text-white rounded-full px-4 py-1.5 text-sm font-medium hover:bg-red-dark transition-colors lowercase"
          >
            donate
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-0 bg-blue-dark z-40 flex flex-col items-center justify-center gap-10">
          <button
            className="absolute top-4 right-4 text-white p-2"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          {NAV_LINKS.filter((link) => link.href !== "#donate").map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-3xl font-bold text-white hover:text-red-light transition-colors lowercase tracking-tight"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            className="bg-red text-white rounded-full px-8 py-3 text-lg font-semibold hover:bg-red-dark transition-colors lowercase"
            onClick={() => setMobileOpen(false)}
          >
            donate
          </a>
        </div>
      )}
    </nav>
  );
}
