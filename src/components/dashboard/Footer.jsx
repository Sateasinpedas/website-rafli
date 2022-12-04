import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="px-10 mt-12 ">
        <h1 className="text-[32px] font-bold w-fit bg-orange">Your turn</h1>
        <p className="text-justify py-5">
          Get in touch now. Tell me more about yourself and how i can help you.
        </p>
      </div>

      <div className="mx-10 flex mb-12">
        <div className="bg-ocean w-fit py-4 px-3 ">
          <p className="text-sm pb-4">Start a project with me</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
        <div className="bg-dark w-fit px-3 py-4">
          <p className="text-sm text-white pb-4">Contact me in linkedin</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
