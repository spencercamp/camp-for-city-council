import Image from "next/image";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SITE, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-blue-dark py-16 text-white relative">
      {/* Red accent stripe */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-red" />

      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + name */}
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-sticker.png"
              alt="Steve Camp for City Council"
              width={32}
              height={32}
              className="h-8 w-auto brightness-0 invert rounded"
            />
            <span className="text-white/50 text-sm lowercase">steve camp for city council</span>
          </div>

          {/* Nav links inline */}
          <nav className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-white/50 hover:text-white transition-colors lowercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social + contact */}
          <div className="flex items-center gap-4">
            <a
              href={SITE.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href={SITE.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="text-white/40 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={`tel:${SITE.phone.replace(/[^\d+]/g, "")}`}
              className="text-white/40 hover:text-white transition-colors"
              aria-label="Phone"
            >
              <Phone className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-10 text-center text-xs text-white/25 lowercase">
          {SITE.disclaimer}
        </p>
      </Container>
    </footer>
  );
}
