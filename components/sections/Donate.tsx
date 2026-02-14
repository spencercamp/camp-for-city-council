"use client";

import { useState } from "react";
import { Copy, CheckCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { DONATE } from "@/lib/constants";

export function Donate() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(DONATE.zellePhone);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
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
    <section id="donate" className="py-20 lg:py-28 bg-gradient-to-br from-amber/10 via-cream to-amber/5">
      <Container>
        <AnimatedSection>
          <SectionHeading subtitle={DONATE.subheading}>
            {DONATE.heading}
          </SectionHeading>

          <div className="mx-auto max-w-lg rounded-2xl bg-white p-8 sm:p-10 shadow-xl text-center border border-amber/20">
            <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber/10">
              <Phone className="h-8 w-8 text-amber" />
            </div>

            <h3 className="text-xl font-bold text-navy mb-2">{DONATE.cta}</h3>
            <p className="text-gray-600 mb-6">Send your contribution via Zelle to:</p>

            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-2xl sm:text-3xl font-bold text-navy tracking-wide">
                {DONATE.zellePhone}
              </span>
              <button
                onClick={handleCopy}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Copy phone number"
              >
                {copied ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <Copy className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>

            {copied && (
              <p className="text-sm text-green-600 font-medium mb-4">
                Copied to clipboard!
              </p>
            )}

            <p className="text-xs text-gray-500 mt-6">
              {DONATE.zelleNote}
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
