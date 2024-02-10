/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaRegFileLines } from "react-icons/fa6";
import { IoMdDownload } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Card(props) {
  return (
    <>
      <motion.div
        drag
        dragConstraints={props.reference}
        whileDrag={{ scale: 1.2 }}
        dragElastic={0.2}
        className="flex-shrink-0 relative w-60 h-72 py-10 px-8 bg-sky-500 text-white rounded-[50px] bg-zinc-900/90 overflow-hidden text-[1.4rem]"
      >
        <FaRegFileLines />
        <p className="text-[13px] leading-tight mt-5 font-semibold">
          {props.data.description}
        </p>
        <div className="footer absolute bottom-0 w-full  left-0">
          <div className="flex items-center justify-between mb-3 px-8 py-3">
            <h5 className="text-white text-[14px]">{props.data.filesize}</h5>
            <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">
              {props.data.close ? (
                <IoCloseSharp />
              ) : (
                <IoMdDownload size=".7em" color="#fff" />
              )}
            </span>
          </div>
          {props.data.tagDetails.isOpened && (
            <div
              className={`tag 2-full py-4 ${
                props.data.tagDetails.tagColor === "blue"
                  ? "bg-blue-600"
                  : "bg-green-600"
              } flex items-center justify-center`}
            >
              <h3 className=" text-sm font-semibold text-white">
                {props.data.tagDetails.tagTitle}
              </h3>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
}
