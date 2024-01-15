import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        {/* Hero */}
        <section id="hero" className="snap-center">
          <Hero />
        </section>
        {/* About */}

        {/* Experience */}

        {/* Skills */}

        {/* Projects */}

        {/* Contact Me */}
      </div>
    </main>
  );
}
