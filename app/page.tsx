import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Issues } from "@/components/sections/Issues";
import { Qualifications } from "@/components/sections/Qualifications";
import { Endorsements } from "@/components/sections/Endorsements";
import { Donate } from "@/components/sections/Donate";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Issues />
        <Image
          src="/images/san-clemente.png"
          alt="A beautiful day in sunny San Clemente with palm trees, the pier, and ocean waves"
          width={2048}
          height={1527}
          className="w-full h-auto block"
          priority={false}
        />
        <Qualifications />
        <Endorsements />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
