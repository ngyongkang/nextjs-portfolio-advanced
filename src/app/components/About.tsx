"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen items-center text-center max-w-7xl px-18 justify-evenly mx-auto
                 md:text-left md:flex-row"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-secondary-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        src="hero.png"
        className="
        -mb-20 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:mb-0 md:w-64 md:h-96 
        xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-primary-500">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I am a full-stack developer, who worked in this industry for two years
          now. I strive to learn new tech stacks and expand my horizons. Even
          though I have not been on many projects yet. I have learnt from my
          past experiences that teamwork is key and believe in working together
          to achieve a better product.
          <br />
          <br />I love coding languages that provide Object Oriented Programming
          such as Java because I like piecing various objects together like a
          puzzle.
        </p>
      </div>
    </motion.div>
  );
}
