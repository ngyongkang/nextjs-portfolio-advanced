import About from "./components/About";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

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
        <section id="experience" className="snap-center">
          <Experience />
        </section>
        {/* Skills */}
        <section id="skills" className="snap-center">
          <Skills />
        </section>
        {/* Projects */}

        {/* Contact Me */}
      </div>
    </main>
  );
}
