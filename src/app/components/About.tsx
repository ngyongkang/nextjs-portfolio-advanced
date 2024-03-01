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
      className="h-screen px-18  mr-10 ml-10
                 relative flex flex-col justify-evenly text-center items-center
                 lg:text-left lg:flex-row"
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
        lg:rounded-lg lg:mt-0 lg:mb-0 lg:w-64 lg:h-80 lg:ml-20
        xl:mt-0 xl:-mb-20 xl:w-[30%] xl:h-[50%]"
      />
      <div className="space-y-4 lg:space-y-10 px-0 lg:px-10">
        <h4 className="text-base lg:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-primary-500">little</span>{" "}
          background
        </h4>
        <p className="text-sm md:text-base">{pageInfo.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}
