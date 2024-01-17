"use client";
import React from "react";
import { motion } from "framer-motion";
// import { experiences } from "../data/staticData";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../../../typings";

type Props = { experiences: Experience[] };

export default function Experience({ experiences }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative overflow-hidden text-left max-w-full px-10 justify-evenly mx-auto items-center
        md:flex-row"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-secondary-500 text-2xl">
        Experience
      </h3>

      <div
        className="w-full space-x-5 p-10 
        flex snap-x snap-mandatory 
        overflow-x-scroll scrollbar scrollbar-track-background-400/20 scrollbar-thumb-secondary-500"
      >
        {experiences.map(function (experience, index) {
          return <ExperienceCard key={index} experience={experience} />;
        })}
      </div>
    </motion.div>
  );
}
