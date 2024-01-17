"use client";
import { motion } from "framer-motion";
import { useFormState } from "react-dom";
import { send } from "../actions";
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/16/solid";

const initialState = {
  success: false,
};

type Props = {};

export default function Contact({}: Props) {
  const [state, formAction] = useFormState(send, initialState);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen z-0
  flex flex-col relative overflow-hidden px-10 justify-evenly mx-auto items-center
  text-left
  md:flex-row"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-secondary-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-2xl font-semibold text-center">
          Now that you know about me,{" "}
          <span className="underline decoration-primary-500">
            Shoot me a message
          </span>{" "}
          if you found what your looking for.
        </h4>

        <div className="space-y-10">
          {/* <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-secondary-500 w-7 h-7 animate-pulse" />
            <p className="text-2x1">1234556</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-secondary-500 w-7 h-7 animate-pulse" />
            <p className="text-2x1">1234556</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-secondary-500 w-7 h-7 animate-pulse" />
            <p className="text-2x1">1234556</p>
          </div> */}

          <form
            className="flex flex-col space-y-2 w-fit mx-auto"
            action={formAction}
          >
            <div className="flex flex-col md:flex-row md:space-x-2">
              <input
                name="name"
                type="text"
                className="contactInput mb-2 md:mb-0"
                placeholder="Name"
              ></input>
              <input
                name="email"
                type="email"
                className="contactInput"
                placeholder="Email"
              ></input>
            </div>
            <input
              name="subject"
              type="text"
              className="contactInput"
              placeholder="Subject"
            ></input>
            <textarea
              name="message"
              className="contactInput"
              placeholder="Message"
            />
            <button
              type="submit"
              className="bg-secondary-500 py-5 px-10 rounded-md font-bold"
            >
              Submit
            </button>
            {state.success ? (
              <p className="text-green-500">Successfully sent email!</p>
            ) : null}
          </form>
        </div>
      </div>
    </motion.div>
  );
}
