import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="mx-10 md:mx-28 lg:mx-36 xl:mx-48 mt-12 ">
        <h1 className="text-[32px] md:text-[48px] font-bold w-fit bg-orange px-2 ">Your turn</h1>
        <p className="text-justify py-5 lg:text-2xl">
          Get in touch now. Tell me more about yourself and how i can help you.
        </p>
      </div>

      <div className="mx-10 md:mx-28 lg:mx-36 xl:mx-48 flex mb-12 md:mb-20 md:mt-10">
        <div href="https://www.linkedin.com/in/rafliardiansyah/"className="bg-ocean w-fit md:w-full py-4 px-3 lg:px-10  hover:bg-blue hover:font-bold">
          <p className="text-sm pb-4 lg:text-xl">Start a project with me</p>
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
        <div className="bg-dark w-fit md:w-full px-3 py-4 lg:px-10 hover:bg-blue hover:font-bold">
          <p className="text-sm text-white lg:text-xl pb-4 ">Contact me in linkedin</p>
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
