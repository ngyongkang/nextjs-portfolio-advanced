import Link from "next/link";
import React from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/16/solid";

type Props = {};

export default function Footer({}: Props) {
  return (
    <Link href={"#hero"}>
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <div className="flex justify-center items-center text-center">
          <ArrowUpCircleIcon className="w-10 h-10 opacity-50 fill-secondary-500 hover:fill-background-500" />
        </div>
      </footer>
    </Link>
  );
}
