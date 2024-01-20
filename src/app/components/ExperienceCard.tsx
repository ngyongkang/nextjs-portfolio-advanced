import React from "react";
import { motion } from "framer-motion";
// import { CardProps } from "../data/types";
import { Experience } from "../../../typings";
import { urlForImage } from "../../../sanity/lib/image";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  const {
    company,
    companyImage,
    jobTitle,
    technologies,
    dateStarted,
    dateEnded,
    isCurrentlyWorkingHere,
    points,
  } = experience;

  return (
    <article
      className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
                 w-[350px] h-[400px] md:w-[600px] md:h-[600px] xl:w-[900px] xl:h-[600px]
                 snap-center bg-opacity-20 bg-background-500 p-10 
                 opacity-40 hover:opacity-100 transition-opacity duration-200 cursor-pointer overflow-hidden"
    >
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src={urlForImage(companyImage)}
        alt="Experience Image"
        className="w-20 h-20 md:w-32 md:h-32 xl:w-[200px] xl:h-[200px] 
        rounded-full object-cover object-center"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-base md:text-4xl font-light">{company}</h4>
        <p className="text-sm">{jobTitle}</p>
        <div className="flex space-x-4 md:space-x-2 my-2">
          {technologies.map(function (skill, index) {
            return (
              <i
                key={index}
                className={`${skill.icon} w-6 h-6 md:w-10 md:h-10 text-4xl rounded-full`}
              />
            );
          })}
        </div>
        <p className="uppercase py-5">
          {dateStarted} - {dateEnded}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-sm md:text-lg">
          {points.map(function (point, index) {
            return <li key={index}>{point}</li>;
          })}
        </ul>
      </div>
    </article>
  );
}
