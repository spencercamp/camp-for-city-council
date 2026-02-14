"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
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
          ? "bg-navy/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      )}
    >
      <Container className="flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/images/logo-sticker.png"
            alt="Steve Camp for City Council"
            width={48}
            height={48}
            className={cn(
              "h-10 w-auto transition-all duration-300 rounded",
              scrolled ? "brightness-0 invert" : "brightness-0 invert"
            )}
          />
          <span className="hidden sm:block text-white font-semibold text-sm">
            Steve Camp
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/90 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <Button href="#donate" variant="primary" size="sm">
            Donate
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 top-0 bg-navy z-40 flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-4 right-4 text-white p-2"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-2xl font-semibold text-white hover:text-amber transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            href="#donate"
            variant="primary"
            size="lg"
            onClick={() => setMobileOpen(false)}
          >
            Donate Now
          </Button>
        </div>
      )}
    </nav>
  );
}
