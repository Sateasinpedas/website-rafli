import React from "react";

const navLink = [
  {
    name: "contact",
    link: "/",
  },
  {
    name: "project",
    link: "/project",
  },
];
export default function Nav() {
  return (
    <>
      <nav className="fixed z-50 left-0 top-0 w-full py-2 px-10 flex flex-row justify-between items-center border-b-[1px] border-black bg-white text-black text-sm font-sans">
        <div className="flex">
          <a href="/" className="py-4 font-bold text-black">
            Tiba-tiba programmer
          </a>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 md:hidden"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <ul className="hidden md:flex ">
            <li>Project</li>
            <li className="pl-8">Contact</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
