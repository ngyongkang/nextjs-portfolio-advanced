"use client";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { Social } from "../../../typings";
type Props = { socials: Social[] };

export default function Header({ socials }: Props) {
  return (
    <header
      className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20
    xl:items-center"
    >
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        {socials.map(function (social) {
          return (
            <SocialIcon
              key={social._id}
              url={social.url}
              className="socialIcons"
              fgColor="currentColor"
              bgColor="transparent"
            />
          );
        })}
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-secondary-300 cursor-pointer"
      >
        {/* Social Icons */}
        <SocialIcon
          url="#contact"
          className="cursor-pointer socialIcons"
          network="email"
          fgColor="currentColor"
          bgColor="transparent"
        />
        <a href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-secondary-400">
            Get In Touch
          </p>
        </a>
      </motion.div>
    </header>
  );
}
