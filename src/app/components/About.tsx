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
        src={urlForImage(pageInfo?.profilePic)}
        className="
        -mb-20 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:mb-0 md:w-64 md:h-96 md:ml-20
        xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-primary-500">little</span>{" "}
          background
        </h4>
        <p className="text-base">{pageInfo.backgroundInformation}</p>
      </div>
    </motion.div>
  );
}
