"use client";

import { useState } from "react";
import { Copy, CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Container } from "@/components/ui/Container";
import { DONATE } from "@/lib/constants";

function ZelleLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Zelle"
    >
      <circle cx="32" cy="32" r="32" fill="#6D1ED4" />
      <rect x="28" y="10" width="8" height="8" fill="#fff" />
      <rect x="17" y="18" width="24" height="7" fill="#fff" />
      <polygon points="41,18 24,46 17,46 34,18" fill="#fff" />
      <rect x="23" y="39" width="24" height="7" fill="#fff" />
      <rect x="28" y="46" width="8" height="8" fill="#fff" />
    </svg>
  );
}

export function Donate() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(DONATE.zellePhone);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textArea = document.createElement("textarea");
      textArea.value = DONATE.zellePhone;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section id="donate" className="bg-white py-24 lg:py-36">
      <Container>
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <SectionHeading subtitle={DONATE.subheading} centered>
              {DONATE.heading}
            </SectionHeading>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mx-auto max-w-xl">
            <div className="rounded-3xl bg-white p-8 ring-1 ring-blue/10 shadow-[0_30px_80px_-30px_rgba(20,40,68,0.18)] sm:p-10">
              {/* Zelle header */}
              <div className="flex items-center justify-center gap-3">
                <ZelleLogo className="h-9 w-9" />
                <span className="text-base font-semibold tracking-tight text-[#6D1ED4]">
                  Donate with Zelle
                </span>
              </div>

              {/* Divider */}
              <div className="my-7 h-px w-full bg-gradient-to-r from-transparent via-blue/15 to-transparent" />

              {/* Number block */}
              <p className="text-center text-xs uppercase tracking-[0.18em] text-gray-500">
                Send to
              </p>
              <div className="mt-3 flex items-center justify-center gap-3">
                <span className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-blue-dark">
                  {DONATE.zellePhone}
                </span>
                <button
                  onClick={handleCopy}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-gray-400 transition-all hover:bg-blue/5 hover:text-blue cursor-pointer"
                  aria-label="Copy phone number"
                >
                  {copied ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                </button>
              </div>
              {copied && (
                <p className="mt-2 text-center text-sm font-medium text-green-600">
                  Copied to clipboard
                </p>
              )}

              {/* Notes */}
              <div className="mt-8 space-y-3 text-center">
                <p className="text-sm leading-relaxed text-gray-600">
                  You can donate up to{" "}
                  <span className="font-semibold text-blue-dark">$5,900</span> per person under California campaign finance law.
                </p>
                <p className="text-sm text-gray-500">
                  Prefer to mail a check?{" "}
                  <a
                    href="#contact"
                    className="font-medium text-blue underline-offset-4 hover:underline transition-colors"
                  >
                    Contact us
                  </a>{" "}
                  for a mailing address.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
