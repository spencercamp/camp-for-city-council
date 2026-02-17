"use client";

import { useState } from "react";
import { Copy, CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
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
      <path
        d="M20 18h24v6H27.5L44 42v6H20v-6h16.5L20 24V18z"
        fill="#fff"
      />
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
    <section id="donate" className="py-24 lg:py-36 bg-offwhite">
      <AnimatedSection>
        <div className="max-w-2xl mx-auto px-6 text-center">
          <SectionHeading subtitle={DONATE.subheading} className="mb-10 lg:mb-12">
            {DONATE.heading}
          </SectionHeading>

          {/* Zelle branding */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <ZelleLogo className="h-10 w-10" />
            <span className="text-lg font-semibold text-[#6D1ED4]">
              Donate with Zelle
            </span>
          </div>

          {/* Zelle number */}
          <p className="text-sm text-gray-500 mb-2">Send your contribution via Zelle to</p>
          <div className="flex items-center justify-center gap-3 mb-2">
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
            <p className="text-sm text-green-600 font-medium mb-2">
              Copied to clipboard!
            </p>
          )}

          {/* Donation limit */}
          <p className="text-base text-gray-600 mt-6">
            You can donate up to <span className="font-bold text-blue">$5,900</span> per person under California campaign finance law.
          </p>
        </div>
      </AnimatedSection>
    </section>
  );
}
