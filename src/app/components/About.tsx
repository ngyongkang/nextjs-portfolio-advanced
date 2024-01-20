"use client";
import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "../../../typings";
import { urlForImage } from "../../../sanity/lib/image";

type Props = { pageInfo: PageInfo };

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen max-w-7xl px-18  mr-10 ml-10
                 relative flex flex-col justify-evenly text-center items-center
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
        src={urlForImage(pageInfo?.profilePic)}
        className="w-40 h-40 mt-[5rem]
        flex-shrink-0 rounded-full object-cover
        md:rounded-lg md:mt-0 md:mb-0 md:w-64 md:h-96 md:ml-20
        xl:mt-0 xl:-mb-20 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-4 md:space-y-10 px-0 md:px-10">
        <h4 className="text-base md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-primary-500">little</span>{" "}
          background
        </h4>
        <p className="text-sm md:text-base">{pageInfo.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}
