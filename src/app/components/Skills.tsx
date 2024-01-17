"use client";
import { motion } from "framer-motion";
import { Skill } from "../../../typings";
import SkillComponent from "./Skill";

type Props = { skills: Skill[] };

export default function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="
                min-h-screen max-w-fit mx-auto
                relative flex flex-col text-center justify-center items-center
                md:text-left 
                xl:flex-row xl:px-10 xl:space-y-0"
    >
      <h3 className="top-24 absolute uppercase tracking-[20px] text-secondary-500 text-2xl">
        Skills
      </h3>

      <h3 className="top-36 absolute uppercase tracking-[3px] text-secondary-500 text-sm">
        Hover over a skill for current proficiency
      </h3>

      <div className="grid grid-cols-4 gap-5 grid-flow-row">
        {skills.map(function (skill, index) {
          return (
            <SkillComponent
              key={index}
              icon={skill.icon}
              direction={skill.direction}
              proficiency={skill.progress}
            />
          );
        })}
      </div>
    </motion.div>
  );
}
