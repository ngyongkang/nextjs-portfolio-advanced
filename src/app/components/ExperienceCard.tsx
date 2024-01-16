import React from "react";
import { motion } from "framer-motion";
import { CardProps } from "../data/types";

export default function ExperienceCard({
  company,
  jobTitle,
  techUsed,
  dates,
  points,
}: CardProps) {
  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
                 w-[400px] md:w-[600px] xl:w-[900px] 
                 snap-center bg-opacity-20 bg-background-500 p-10 
                 opacity-40 hover:opacity-100 transition-opacity duration-200 cursor-pointer overflow-hidden"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src="/hero.png"
        alt="Experience Image"
        className="w-32 h-32 rounded-full  object-cover object-center xl:w-[200px] xl:h-[200px]"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{company}</h4>
        <p>{jobTitle}</p>
        <div className="flex space-x-2 my-2">
          {techUsed.map(function (skill, index) {
            return (
              <i
                key={index}
                className={`${skill.icon} h-10 w-10 text-4xl rounded-full`}
              ></i>
            );
          })}
        </div>
        <p className="uppercase py-5">
          {dates[0]} - {dates[1]}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg">
          {points.map(function (point, index) {
            return <li key={index}>{point}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}
