"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      setHidden(currentScrollY > 50 && currentScrollY > lastScrollY);
      lastScrollY = currentScrollY;
    };
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
        "md:top-4 md:left-6 md:right-6",
        "bg-blue-dark/95 backdrop-blur-sm",
        "md:rounded-full md:max-w-5xl md:mx-auto",
        "border border-white/20",
        scrolled ? "shadow-lg" : "",
        hidden && !mobileOpen ? "-translate-y-full md:-translate-y-[calc(100%+1rem)]" : "translate-y-0"
      )}
    >
      <div className="mx-auto w-full px-6 lg:px-8 flex items-center justify-between py-3">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/images/logo-campaign.png"
            alt="Steve Camp for City Council"
            width={48}
            height={48}
            className="h-12 w-auto"
          />
          <span className="text-white text-lg font-semibold tracking-wide">
            Steve Camp
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.filter((link) => link.href !== "#donate").map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            className="bg-red text-white rounded-full px-4 py-1.5 text-sm font-medium hover:bg-red-dark transition-colors"
          >
            Donate
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
              className="text-3xl font-bold text-white hover:text-red-light transition-colors tracking-tight"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            className="bg-red text-white rounded-full px-8 py-3 text-lg font-semibold hover:bg-red-dark transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Donate
          </a>
        </div>
      )}
    </nav>
  );
}
