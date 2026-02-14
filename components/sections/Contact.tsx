"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { CONTACT, SITE } from "@/lib/constants";

type FormState = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(SITE.formspreeEndpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setState("success");
        form.reset();
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <Container>
        <AnimatedSection>
          <SectionHeading subtitle={CONTACT.subheading}>
            {CONTACT.heading}
          </SectionHeading>

          <div className="mx-auto max-w-xl">
            {state === "success" ? (
              <div className="rounded-xl bg-green-50 p-8 text-center border border-green-200">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Thank You!
                </h3>
                <p className="text-green-700">
                  You&apos;re signed up to receive campaign updates. Together, we&apos;ll
                  make a difference for San Clemente.
                </p>
                <button
                  onClick={() => setState("idle")}
                  className="mt-4 text-sm text-green-600 underline hover:text-green-800"
                >
                  Sign up another supporter
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-colors"
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-colors"
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-colors"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Cell Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-colors"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      pattern="[0-9]{5}"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-navy focus:ring-2 focus:ring-navy/20 outline-none transition-colors"
                      placeholder="92672"
                    />
                  </div>
                </div>

                {state === "error" && (
                  <div className="flex items-center gap-2 text-red-600 text-sm">
                    <AlertCircle className="h-4 w-4" />
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full"
                  disabled={state === "submitting"}
                >
                  {state === "submitting" ? (
                    "Sending..."
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="h-4 w-4" />
                      Join the Campaign
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
