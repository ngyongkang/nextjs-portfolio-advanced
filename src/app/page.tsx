import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <section id="hero" className="snap-start">
          <Hero />
        </section>
        <section id="about" className="snap-center">
          <About />
        </section>
        {/* Experience */}

        {/* Skills */}

        {/* Projects */}

        {/* Contact Me */}
      </div>
    </main>
  );
}
