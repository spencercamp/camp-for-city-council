import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SITE, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-navy-dark py-12 text-white">
      <Container>
        <div className="flex flex-col items-center gap-8">
          <Image
            src="/images/logo-sticker.png"
            alt="Steve Camp for City Council"
            width={80}
            height={80}
            className="h-16 w-auto brightness-0 invert rounded"
          />

          <nav className="flex flex-wrap justify-center gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="text-center">
            <p className="text-xs text-white/50 max-w-md">
              {SITE.disclaimer}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
