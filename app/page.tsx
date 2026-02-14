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
        <Qualifications />
        <Endorsements />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
