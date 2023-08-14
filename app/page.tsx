// import { About } from "@/components/Home/About";
// import { Contact } from "@/components/Home/Contact";
import { Hero } from "@/components/Home/Hero";
import { Projects } from "@/components/Home/Projects";
import { Services } from "@/components/Home/Services";
import { Skills } from "@/components/Home/Skills";

export default function RootPage() {
  return (
    <div>
      <Hero />
      {/* <About /> */}
      <Skills />
      <Projects />
      {/* <Services />
      <Contact /> */}
    </div>
  );
}
