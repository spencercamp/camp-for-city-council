import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Issues } from "@/components/sections/Issues";
import { Endorsements } from "@/components/sections/Endorsements";
import { GetInvolved } from "@/components/sections/GetInvolved";
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
        <Endorsements />
        <GetInvolved />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
