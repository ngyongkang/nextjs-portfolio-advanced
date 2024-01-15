"use client";
import React from "react";
import { motion } from "framer-motion";
import ExperienceCard, { CardDetails } from "./ExperienceCard";

type Props = {};

const experiences: CardDetails[] = [
  {
    company: "ST-Engineering",
    jobTitle: "Software Engineer",
    techUsed: [
      { icon: "devicon-javascript-plain", color: "text-yellow-500" },
      { icon: "devicon-html5-plain", color: "text-orange-500" },
      { icon: "devicon-css3-plain", color: "text-cyan-500" },
    ],
    dates: ["Feb 2022", "Dec 2023"],
    points: [
      "Built a Devs Op platform to perform CICD for department.",
      "Did a government project and perform various software integration.",
    ],
  },
  {
    company: "ST-Engineering",
    jobTitle: "Software Engineer",
    techUsed: [
      { icon: "devicon-javascript-plain", color: "text-yellow-500" },
      { icon: "devicon-html5-plain", color: "text-orange-500" },
      { icon: "devicon-css3-plain", color: "text-cyan-500" },
    ],
    dates: ["Feb 2022", "Dec 2023"],
    points: [
      "Built a Devs Op platform to perform CICD for department.",
      "Did a government project and perform various software integration.",
    ],
  },
  {
    company: "ST-Engineering",
    jobTitle: "Software Engineer",
    techUsed: [
      { icon: "devicon-javascript-plain", color: "text-yellow-500" },
      { icon: "devicon-html5-plain", color: "text-orange-500" },
      { icon: "devicon-css3-plain", color: "text-cyan-500" },
    ],
    dates: ["Feb 2022", "Dec 2023"],
    points: [
      "Built a Devs Op platform to perform CICD for department.",
      "Did a government project and perform various software integration.",
    ],
  },
];

export default function Experience({}: Props) {
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

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        {experiences.map(function (experience, index) {
          return (
            <ExperienceCard
              key={index}
              company={experience.company}
              jobTitle={experience.jobTitle}
              techUsed={experience.techUsed}
              dates={experience.dates}
              points={experience.points}
            />
          );
        })}
      </div>
    </motion.div>
  );
}
