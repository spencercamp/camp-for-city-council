import { Facebook, Instagram, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SITE, NAV_LINKS } from "@/lib/constants";

function MarqueeText() {
  const items = Array.from({ length: 6 }, (_, i) => (
    <span key={i} className="flex items-center gap-[0.4em]">
      <span className="text-blue/20">VOTE</span>
      <span className="text-blue-dark">STEVE CAMP</span>
    </span>
  ));

  return (
    <div className="flex items-center gap-[0.6em] whitespace-nowrap px-[0.3em]">
      {items}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-offwhite">
      {/* Zone 1 — Marquee */}
      <div className="overflow-hidden py-4" aria-hidden="true">
        <div className="animate-marquee flex w-max items-center gap-[0.3em] font-heading font-extrabold leading-[0.85] tracking-tight [font-size:clamp(6rem,18vw,14rem)]">
          <MarqueeText />
          <MarqueeText />
        </div>
      </div>

      {/* Zone 2 — Tagline + CTA */}
      <Container>
        <div className="flex flex-col items-start gap-8 pb-16 pt-4 md:flex-row md:items-end md:justify-between">
          <p className="font-heading text-[clamp(2rem,5vw,3.5rem)] font-medium leading-[1.1] tracking-tight text-blue/30">
            <span className="font-extrabold text-blue-dark">Fight</span> for
            <br />
            <span className="font-extrabold text-blue-dark">San Clemente</span>
          </p>
          <a
            href="#donate"
            className="inline-block rounded-full bg-blue-dark px-16 py-7 text-2xl font-bold text-white transition-colors hover:bg-blue-light md:text-3xl"
          >
            Donate
          </a>
        </div>
      </Container>

      {/* Zone 3 — Bottom bar */}
      <div className="border-t border-blue/10">
        <Container>
          <div className="flex flex-col items-center gap-4 py-6 text-sm text-blue/50 sm:flex-row sm:justify-between">
            <p className="text-xs">{SITE.disclaimer}</p>

            <div className="flex items-center gap-6">
              <nav className="flex items-center gap-4">
                {NAV_LINKS.filter((l) => l.label !== "Donate").map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-xs text-blue/50 transition-colors hover:text-blue-dark"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>

              <div className="flex items-center gap-3">
                <a
                  href={SITE.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue/40 transition-colors hover:text-blue-dark"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href={SITE.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue/40 transition-colors hover:text-blue-dark"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-blue/40 transition-colors hover:text-blue-dark"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
