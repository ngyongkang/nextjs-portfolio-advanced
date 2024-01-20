"use server";

import About from "./components/About";
import Contact from "./components/Contact";
import Experiences from "./components/Experiences";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import { Experience, PageInfo, Project, Skill, Social } from "../../typings";
import { queryData } from "./utils/database";

export default async function Home() {
  const pageInfo: PageInfo = await queryData(`*[_type == "pageInfo"][0]`);
  const experiences: Experience[] = await queryData(
    `*[_type == "experience"] {...,technologies[] ->}`
  );
  const skills: Skill[] = await queryData(`*[_type == "skill"]`);
  const projects: Project[] = await queryData(`*[_type == "project"] {
    ...,
    technologies[] ->
}`);
  const socials: Social[] = await queryData(`*[_type == "social"]`);

  return (
    <main>
      <div>
        <Header socials={socials} />
        <section id="hero" className="snap-start">
          <Hero pageInfo={pageInfo} />
        </section>
        <section id="about" className="snap-center">
          <About pageInfo={pageInfo} />
        </section>
        <section id="experience" className="snap-center">
          <Experiences experiences={experiences} />
        </section>
        <section id="skills" className="snap-start">
          <Skills skills={skills} />
        </section>
        <section id="projects" className="snap-start">
          <Projects projects={projects} />
        </section>
        <section id="contact" className="snap-end">
          <Contact />
        </section>
        <Footer />
      </div>
    </main>
  );
}
