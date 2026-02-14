"use client";

import { useState } from "react";
import { Copy, CheckCircle } from "lucide-react";
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
    <section id="donate" className="py-24 lg:py-36 bg-offwhite">
      <Container>
        <AnimatedSection>
          <div className="bg-white rounded-2xl p-8 md:p-12 max-w-2xl mx-auto shadow-sm border border-gray-100">
            <SectionHeading subtitle={DONATE.subheading} className="mb-10 lg:mb-12">
              {DONATE.heading}
            </SectionHeading>

            {/* Zelle number */}
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-2 lowercase">send via zelle to</p>
              <div className="flex items-center gap-3">
                <span className="text-3xl md:text-4xl font-bold text-blue tracking-wide">
                  {DONATE.zellePhone}
                </span>
                <button
                  onClick={handleCopy}
                  className="p-2 text-gray-400 hover:text-blue transition-colors cursor-pointer"
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
                <p className="text-sm text-green-600 font-medium mt-2">
                  Copied to clipboard!
                </p>
              )}
            </div>

            {/* Amount pills */}
            <div className="mb-8">
              <p className="text-sm text-gray-500 mb-3">Select an amount</p>
              <div className="flex flex-wrap gap-3">
                {DONATE.amounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedAmount(amount === selectedAmount ? null : amount)}
                    className={`rounded-full py-2.5 px-5 text-base font-bold transition-all duration-200 cursor-pointer ${
                      selectedAmount === amount
                        ? "border-2 border-red bg-red text-white"
                        : "border-2 border-gray-200 text-gray-700 hover:border-red hover:text-red"
                    }`}
                  >
                    ${amount.toLocaleString()}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-xs text-gray-400">
              {DONATE.zelleNote}
            </p>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
