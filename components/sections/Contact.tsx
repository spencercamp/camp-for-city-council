"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, AlertCircle, Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";
import { CONTACT, SITE } from "@/lib/constants";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zipCode: string;
  smsOptIn: boolean;
}

type FormState = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload: ContactFormData = {
      firstName: String(formData.get("firstName") ?? ""),
      lastName: String(formData.get("lastName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      zipCode: String(formData.get("zipCode") ?? ""),
      smsOptIn: formData.get("smsOptIn") === "on",
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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
    "w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-[15px] text-gray-900 placeholder:text-gray-400 transition-all focus:border-blue focus:outline-none focus:ring-4 focus:ring-blue/10";
  const labelClass = "mb-1.5 block text-sm font-medium text-gray-700";

  return (
    <section id="contact" className="bg-offwhite py-24 lg:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-20">
          {/* Left — heading and direct contact */}
          <div className="lg:col-span-5">
            <SectionHeading subtitle={CONTACT.subheading}>
              {CONTACT.heading}
            </SectionHeading>

            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
                Get in touch
              </p>
              <a
                href={`mailto:${SITE.email}`}
                className="group flex items-center gap-3 text-gray-700 transition-colors hover:text-blue-dark"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-blue/10 transition-colors group-hover:ring-blue/30">
                  <Mail className="h-4 w-4 text-blue" />
                </span>
                <span className="text-[15px]">{SITE.email}</span>
              </a>
              <a
                href={`tel:${SITE.phone.replace(/[^\d+]/g, "")}`}
                className="group flex items-center gap-3 text-gray-700 transition-colors hover:text-blue-dark"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white ring-1 ring-blue/10 transition-colors group-hover:ring-blue/30">
                  <Phone className="h-4 w-4 text-blue" />
                </span>
                <span className="text-[15px]">{SITE.phone}</span>
              </a>
            </div>
          </div>

          {/* Right — form */}
          <AnimatedSection className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-8 ring-1 ring-blue/10 shadow-[0_30px_80px_-30px_rgba(20,40,68,0.15)] sm:p-10">
              {state === "success" ? (
                <div className="py-6 text-center">
                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-50 ring-1 ring-green-200">
                    <CheckCircle className="h-7 w-7 text-green-500" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-blue-dark">
                    Welcome aboard.
                  </h3>
                  <p className="mt-3 text-gray-600">
                    You&apos;re on the list. Together, we&apos;ll keep San Clemente the place we love.
                  </p>
                  <button
                    onClick={() => setState("idle")}
                    className="mt-5 text-sm font-medium text-blue underline-offset-4 hover:underline cursor-pointer"
                  >
                    Sign up another supporter
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="firstName" className={labelClass}>
                        First name <span className="text-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className={inputClass}
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className={labelClass}>
                        Last name <span className="text-red">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className={inputClass}
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email address <span className="text-red">*</span>
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

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className={labelClass}>
                        Cell phone
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
                      <label htmlFor="zipCode" className={labelClass}>
                        Zip code
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
                  <label
                    htmlFor="smsOptIn"
                    className="flex cursor-pointer items-start gap-3 rounded-xl bg-slate/40 p-4 ring-1 ring-blue/[0.06] transition-colors hover:bg-slate/60"
                  >
                    <input
                      type="checkbox"
                      id="smsOptIn"
                      name="smsOptIn"
                      className="mt-0.5 h-4 w-4 cursor-pointer rounded border-gray-300 text-blue accent-blue focus:ring-blue"
                    />
                    <span className="text-xs leading-relaxed text-gray-600">
                      I agree to receive text messages from Steve Camp for City Council. Message and data rates may apply. Reply STOP to opt out at any time.
                    </span>
                  </label>

                  {state === "error" && (
                    <div className="flex items-center gap-2 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-100">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      <span>Something went wrong. Please try again.</span>
                    </div>
                  )}

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={state === "submitting"}
                      className="w-full sm:w-auto"
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
                  </div>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
