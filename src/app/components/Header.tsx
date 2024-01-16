"use client";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
type Props = {};

export default function Header({}: Props) {
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
        <SocialIcon
          url="https://linkedin.com/in/ng-yong-kang-a60871193"
          className="socialIcons"
          fgColor="currentColor"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/ngyongkang"
          className="socialIcons"
          fgColor="currentColor"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-secondary-300 cursor-pointer"
      >
        {/* Social Icons */}
        <SocialIcon
          className="cursor-pointer socialIcons"
          network="email"
          fgColor="currentColor"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-secondary-400">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}
