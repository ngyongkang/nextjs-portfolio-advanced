"use client";
import { motion } from "framer-motion";
import { urlForImage } from "../../../sanity/lib/image";
import { Project } from "../../../typings";
import Link from "next/link";

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen max-w-full z-0
      flex flex-col relative overflow-hidden px-10 justify-evenly mx-auto items-center
      text-left  
      md:flex-row"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-secondary-500 text-2xl">
        Projects
      </h3>

      <div
        className="w-full z-20 
      relative flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory
      scrollbar-thin scrollbar-track-background-400/20 scrollbar-thumb-secondary-500"
      >
        {projects.map(function (project, index) {
          return <ProjectComponent key={index} project={project} />;
        })}
      </div>

      <div
        className="w-full h-[500px] bg-secondary-500/10 
                      absolute top-[30%] left-0 -skew-y-12"
      ></div>
    </motion.div>
  );
}

type Props2 = {
  project: Project;
};

function ProjectComponent({ project }: Props2) {
  return (
    <div
      className="w-screen h-screen 
      flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center 
      p-20 md:p44"
    >
      <Link
        href={project.linkToBuild}
        rel="noopener noreferrer"
        target="_blank"
      >
        <motion.img
          initial={{ opacity: 0, y: -300 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
          src={urlForImage(project?.image)}
          alt="project image"
        />
      </Link>

      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="sm:text-xl md:text-4xl font-semibold text-center">
          {project.title}
        </h4>
        <div>
          {project.technologies.map(function (technology, index) {
            return (
              <i
                key={index}
                className={`${technology.icon} mr-2 sm:text-xl md:text-4xl`}
                title={technology.title}
              />
            );
          })}
        </div>
        <p className="sm:text-base md:text-lg text-center md:text-left">
          {project.summary}
        </p>
      </div>
    </div>
  );
}
