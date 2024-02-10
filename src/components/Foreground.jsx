/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import Card from "./Card";

export default function Foreground() {
  const ref=useRef(null);
  const data = [
    {
      description: "Programming is 10% writing code and 90% understanding why it’s not working",
      filesize: ".6mb",
      close: true,
      tagDetails: {
        isOpened: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
    {
      description: "Programmer: An organism that turns coffee into software",
      filesize: ".4mb",
      close: true,
      tagDetails: {
        isOpened: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    },{
      description: "My mind is like an internet browser, 19 tabs open, 3 of them are frozen, ads popping up everywhere, I have no idea where the music is coming from",
      filesize: "2.9mb",
      close: true,
      tagDetails: {
        isOpened: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
    {
      description: "Q: What is the difference between a programmer and a non-programmer? A: The non-programmer things a kilobyte is 1000 bytes while a programmer is convinced that a kilometer is 1024 meters.",
      filesize: ".9mb",
      close: false,
      tagDetails: {
        isOpened: true,
        tagTitle: "Download Now",
        tagColor: "green",
      },
    }
  ];
  return (
    <>
      <div ref={ref} className="fixed z-[3] top-0 left-0 p-5 w-full h-full flex gap-5 flex-wrap">
      {
        data.map((d)=>(<Card data={d} reference={ref}/>))
      }
      </div>
    </>
  );
}
