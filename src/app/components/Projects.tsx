"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectProps } from "../data/types";
import { projects } from "../data/staticData";

type Props = {};

export default function Projects({}: Props) {
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
      relative flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory"
      >
        {projects.map(function (project, index) {
          return (
            <Project
              key={index}
              imgUrl={project.imgUrl}
              title={project.title}
              description={project.description}
            />
          );
        })}
      </div>

      <div
        className="w-full h-[500px] bg-secondary-500/10 
                      absolute top-[30%] left-0 -skew-y-12"
      ></div>
    </motion.div>
  );
}

function Project({ imgUrl, title, description }: ProjectProps) {
  return (
    <div
      className="w-screen h-screen 
      flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center 
      p-20 md:p44"
    >
      <motion.img
        initial={{ opacity: 0, y: -300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        src={imgUrl}
        alt="project image"
      />
      {/* <Image src={imgUrl} alt="project image" /> */}
      <div className="space-y-10 px-0 md:px-10 max-w-6xl">
        <h4 className="text-4xl font-semibold text-center">{title}</h4>
        <p className="text-lg text-center md:text-left">{description}</p>
      </div>
    </div>
  );
}
