import Image from "next/image";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SITE, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-navy-dark py-20 lg:py-24 text-white relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red via-amber to-red" />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand & social */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Image
              src="/images/logo-sticker.png"
              alt="Steve Camp for City Council"
              width={80}
              height={80}
              className="h-16 w-auto brightness-0 invert rounded"
            />
            <p className="text-white/60 text-sm max-w-xs text-center md:text-left">
              Committed to public safety, fiscal responsibility, and quality of life for San Clemente.
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a
                href={SITE.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={SITE.socialMedia.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact info */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                {SITE.email}
              </a>
              <a
                href={`tel:${SITE.phone.replace(/[^\d+]/g, "")}`}
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-white/40">
            {SITE.disclaimer}
          </p>
        </div>
      </Container>
    </footer>
  );
}
