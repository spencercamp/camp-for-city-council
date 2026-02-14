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

  const inputClass =
    "w-full bg-transparent border-b-2 border-gray-200 px-0 py-3 text-gray-900 placeholder:text-gray-400 focus:border-blue focus:outline-none transition-colors";

  return (
    <section id="contact" className="py-24 lg:py-36 bg-white">
      <Container>
        <AnimatedSection>
          <SectionHeading subtitle={CONTACT.subheading}>
            {CONTACT.heading}
          </SectionHeading>

          <div className="max-w-2xl">
            {state === "success" ? (
              <div className="rounded-md bg-green-50 p-8 text-center border border-green-200">
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
                  className="mt-4 text-sm text-green-600 underline hover:text-green-800 cursor-pointer"
                >
                  Sign up another supporter
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs text-gray-500 mb-1 lowercase">
                      first name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className={inputClass}
                      placeholder="First name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs text-gray-500 mb-1 lowercase">
                      last name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className={inputClass}
                      placeholder="Last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs text-gray-500 mb-1 lowercase">
                    email address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs text-gray-500 mb-1 lowercase">
                      cell phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className={inputClass}
                      placeholder="(555) 555-5555"
                    />
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-xs text-gray-500 mb-1 lowercase">
                      zip code
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      pattern="[0-9]{5}"
                      className={inputClass}
                      placeholder="92672"
                    />
                  </div>
                </div>

                {/* SMS opt-in */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="smsOptIn"
                    name="smsOptIn"
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-blue focus:ring-blue"
                  />
                  <label htmlFor="smsOptIn" className="text-xs text-gray-500 leading-relaxed">
                    I agree to receive text messages from Steve Camp for City Council. Message and data rates may apply. Reply STOP to opt out at any time.
                  </label>
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
