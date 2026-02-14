"use client";

import { useState } from "react";
import { Copy, CheckCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { DONATE } from "@/lib/constants";

export function Donate() {
  const [copied, setCopied] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);

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
    <section id="donate" className="py-20 lg:py-28 bg-gradient-to-br from-amber/10 via-cream to-amber/5">
      <Container>
        <AnimatedSection>
          <SectionHeading subtitle={DONATE.subheading}>
            {DONATE.heading}
          </SectionHeading>

          <div className="mx-auto max-w-2xl">
            {/* Preset amounts */}
            <div className="mb-8">
              <p className="text-center text-navy font-semibold mb-4 text-lg">Select an Amount</p>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                {DONATE.amounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount === selectedAmount ? null : amount)}
                    className={`rounded-xl py-3 px-2 text-center text-lg font-bold transition-all duration-200 cursor-pointer ${
                      selectedAmount === amount
                        ? "bg-red text-white shadow-lg scale-105"
                        : "bg-white text-navy border-2 border-gray-200 hover:border-red hover:text-red"
                    }`}
                  >
                    ${amount.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            {/* Zelle card */}
            <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-xl text-center border border-amber/20">
              <div className="mb-6 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-amber/10">
                <Phone className="h-8 w-8 text-amber" />
              </div>

              <h3 className="text-xl font-bold text-navy mb-2">{DONATE.cta}</h3>
              <p className="text-gray-600 mb-6">
                Send{selectedAmount ? ` $${selectedAmount.toLocaleString()}` : " your contribution"} via Zelle to:
              </p>

              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="text-2xl sm:text-3xl font-bold text-navy tracking-wide">
                  {DONATE.zellePhone}
                </span>
                <button
                  onClick={handleCopy}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
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
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
