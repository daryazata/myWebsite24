"use client";

import Link from "next/link";

import { VscGithubInverted } from "react-icons/vsc";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { permanent_marker } from "./fonts";

export default function Page() {
  const router = useRouter();

  return (
    <>
      {/* ICONS */}
      <header className=" h-16 flex md:h-20 lg:h-24  relative">
        <div className="flex-none md:w-40 bg-amber-100 hover:bg-yellow-300"></div>
        <div className="grow flex items-center  justify-end bg-blue-200 hover:bg-blue-400">
          <Link
            className="mr-6 md:mr-12 lg:mr-16 md:mb-4"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/darya-zata-88554119a/"
          >
            <RiLinkedinBoxFill className="text-2xl md:text-3xl lg:text-4xl  lg:text-4xl text-gray-600 hover:text-yellow-300 hover:cursor-pointer" />
          </Link>

          <AiOutlineMail
            onClick={() => router.push("mailto:darya.zata@gmail.com")}
            className="mr-6 md:mr-12 lg:mr-16 text-2xl md:text-3xl lg:text-4xl  md:mb-4 text-gray-600 hover:text-yellow-300 hover:cursor-pointer"
          />

          <Link
            className="mr-8 md:mr-12 lg:mr-16 md:mb-4"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/daryazata/"
          >
            <VscGithubInverted className="text-xl md:text-2xl lg:text-3xl text-gray-600 hover:text-yellow-300 hover:cursor-pointer" />
          </Link>
        </div>
        <div className="flex-none md:w-40  bg-amber-100 hover:bg-yellow-300"></div>
      </header>
      <main className="flex flex-col h-screen bg-blue-200 text-gray-700">
        {/* DARYA ZATA */}
        <div className="flex relative  h-2/6">
          <div className="flex-none md:w-40  bg-blue-200 hover:bg-blue-400"></div>
          <div className="grow flex   justify-start bg-amber-100   hover:bg-yellow-300"></div>
          <div className=" flex-none md:w-40  bg-blue-200 hover:bg-blue-400"></div>
          <p className="absolute top-4 lg:top-2 2xl:top-30 text-7xl md:text-8xl lg:text-huge left-8 lg:left-auto md:right-10 text-gray-600  leading-none pointer-events-none">
            DARYA ZATA
          </p>
        </div>
        {/*  TYPESCRIPT */}
        <div className="flex relative h-1/6">
          <div className="flex-none md:w-40 bg-amber-100  hover:bg-yellow-300"></div>
          <div className="grow text-gray-300  flex items-center  justify-evenly bg-blue-200 hover:bg-blue-400"></div>
          <div className="flex-none md:w-40  bg-amber-100 hover:bg-yellow-300"></div>
          <p
            className={`${permanent_marker.className} absolute top-4 lg:top-1 right-6 md:right-10 leading-none text-3xl md:text-5xl lg:text-xxxl pointer-events-none`}
          >
            TYPESCRIPT
          </p>
        </div>
        {/* REACT*/}
        <div className="flex h-1/6 relative">
          <div className="flex-none md:w-40 bg-blue-200 hover:bg-blue-400"></div>
          <div className="grow flex items-center  justify-evenly bg-amber-100 hover:bg-yellow-300">
            <div className=" text-gray-500 leading-none "></div>
          </div>
          <div className="flex-none md:w-40  bg-blue-200 hover:bg-blue-400 hover:bg-blue-400"></div>
          <p
            className={`${permanent_marker.className} absolute top-4 lg:top-1 right-10 md:right-20 leading-none text-3xl md:text-5xl lg:text-xxxl pointer-events-none`}
          >
            REACT
          </p>
        </div>
        {/*  JAVASCRIPT */}
        <div className="flex h-1/6 relative">
          <div className="flex-none md:w-40 bg-amber-100 hover:bg-yellow-300 "></div>
          <div className="grow text-gray-300  flex items-center  justify-evenly bg-blue-200 hover:bg-blue-400 "></div>
          <div className=" flex-none md:w-40 bg-amber-100 hover:bg-yellow-300"></div>
          <p
            className={`${permanent_marker.className} absolute top-4 lg:top-1  right-12 md:right-24 leading-none text-3xl md:text-5xl lg:text-xxxl pointer-events-none`}
          >
            JAVASCRIPT
          </p>
        </div>
        {/*  WEB DEVELOPER */}
        <div className="flex h-2/6 relative">
          <div className="flex-none md:w-40 bg-blue-200 hover:bg-blue-400"></div>
          <div className="grow flex items-center  justify-center bg-amber-100 hover:bg-yellow-300"></div>
          <div className="flex-none md:w-40  bg-blue-200 hover:bg-blue-400"></div>
          <p className="absolute top-8  md:top-1 lg:top-4 left-6 lg:left-auto md:right-12  text-gray-600  leading-none text-6xl md:text-8xl lg:text-big pointer-events-none">
            WEB DEVELOPER
          </p>
        </div>
        {/* REACT NATIVE */}
        <div className="flex h-1/6 relative">
          <div className="flex-none md:w-40 bg-amber-100 hover:bg-yellow-300"></div>
          <div className="text-gray-300  grow flex items-center  justify-evenly bg-blue-200 hover:bg-blue-400"></div>
          <div className="flex-none md:w-40  bg-amber-100 hover:bg-yellow-300"></div>
          <p
            className={`${permanent_marker.className} absolute top-4 lg:top-1 right-12 lg:right-16 leading-none text-3xl md:text-5xl lg:text-xxxl pointer-events-none`}
          >
            REACT NATIVE
          </p>
        </div>
      </main>
    </>
  );
}
