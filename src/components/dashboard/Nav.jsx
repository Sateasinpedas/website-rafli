import React from "react";

const navLink = [
  {
    name: "contact",
    link: "/#footer",
  },
  {
    name: "project",
    link: "/",
  },
];
export default function Nav() {
  return (
    <>
      <nav className="fixed z-50 left-0 top-0 w-full py-2 px-10 md:px-28 lg:px-36 xl:px-48 flex flex-row justify-between items-center border-b-[1px] border-black bg-white text-black text-sm font-sans">
        <div className="py-4">
          <a href="/" className="font-bold text-black">
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
            <a href="#footer">
              <li className="pl-8">Contact</li>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
}
