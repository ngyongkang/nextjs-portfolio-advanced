"use Client";
import { motion } from "framer-motion";
import React from "react";
import { Skill } from "../../../typings";

type Props = {
  skill: Skill;
};

export default function Skill({ skill }: Props) {
  const [aniState, setAniState] = React.useState(false);
  const { direction, icon, progress, title } = skill;
  return (
    <div className="group relative flex cursor-pointer">
      <motion.i
        initial={{
          x: direction == "l" ? -200 : direction == "r" ? 200 : 0,
          y: direction == "t" ? -200 : direction == "b" ? 200 : 0,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        onAnimationComplete={() => setAniState(true)}
        className={`${icon}
                    w-16 h-16 md:w-28 md:h-28 lg:w-32 lg:h-32
                    rounded-full border border-secondary-500 border-opacity-20
                    absolute flex text-center justify-center items-center
                    text-5xl md:text-6xl lg:text-7xl
                    filter group-hover:grayscale group-hover:text-gray-500 duration-300 ease-in-out`}
      />
      {/* IDEA Add a border around based on percent of skill,
          also do number animation from previous project. */}
      <div
        className={`w-16 h-16 md:w-28 md:h-28 lg:w-32 lg:h-32 z-0
                   rounded-full 
                   abosolute opacity-0  
                   ${
                     aniState
                       ? "group-hover:opacity-80 group-hover:bg-background-100 transition duration-300 ease-in-out"
                       : ""
                   } `}
      >
        <div className="flex items-center justify-center text-center h-full">
          <p
            className="sm:text-2xl md:text-3xl 
          font-bold text-secondary-500 opacity-100"
          >
            {progress}
          </p>
        </div>
      </div>
    </div>
  );
}
