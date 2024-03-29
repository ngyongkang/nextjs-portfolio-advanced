"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { PageInfo } from "../../../typings";
import { urlForImage } from "../../../sanity/lib/image";

type Props = { pageInfo: PageInfo };

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [`Hi, my name is ${pageInfo?.name}`, "Welcome to my site"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      className="h-screen flex flex-col space-y-0 
    items-center justify-center text-center overflow-hidden"
    >
      <BackgroundCircles />
      <Image
        src={urlForImage(pageInfo.heroImage)!}
        alt="hero image"
        className="relative rounded-full mx-auto pb-5"
        height={128}
        width={128}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-secondary-500 pb-2 tracking-[15px]">
          {pageInfo?.role}
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span>
            {text}
            <span className="text-primary-500">
              <Cursor />
            </span>
          </span>
        </h1>

        <div className="pt-5">
          <Link href={"#about"}>
            <button className="heroButton">About</button>
          </Link>
          <Link href={"#experience"}>
            <button className="heroButton">Experience</button>
          </Link>
          <Link href={"#skills"}>
            <button className="heroButton">Skills</button>
          </Link>
          <Link href={"#projects"}>
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
