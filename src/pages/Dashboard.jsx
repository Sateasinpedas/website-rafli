import React from "react";
import Nav from "../components/dashboard/Nav";
import Footer from "../components/dashboard/Footer";
import Hero from "../assets/Hero.svg";
import UIUX from "../assets/UIUX.svg";
import FE from "../assets/FE.svg";
import PM from "../assets/PM.svg";
import Type from "../components/dashboard/Type";

export default function Dashboard() {
  return (
    <>
      <Nav />

      <div className="mt-28 mb-5 mx-10 md:mx-28">
        <div className="flex items-center">
          <h1 className="font-semibold text-[28px] pr-2">I am a</h1>
          <Type />
        </div>
        <p className="text-lg">Data Enthusiast</p>
        <img src={Hero} alt="" />
      </div>

      <div className="mx-10 md:mx-28 mb-10">
        <div className="mb-2 flex">
          <div className="w-4 h-4 mr-4 bg-blue rounded-md"></div>
          <p className="text-sm">Introduction</p>
        </div>

        <h1 className="text-3xl font-bold mb-4">Learn to Learn</h1>
        <p className="text-justify">
          Hello! I'm Rafli, an Information Technology (IT) Student based in
          Bandung, Indonesia. I'm interest to Data Analyst and Front-end
          Development. I love visualization data because its look beautiful and
          manifesting what i think. I love to learn anything about technology, i
          can be project manager on a big project. I'm constansly evolving,
          learning and growing so you can expect that working with me is going
          to be a fun and exciting ride. Cool, now that you know me for me, how
          may i help you today?
        </p>
      </div>

      <div className="mx-10 md:mx-28 mt-10">
        <div className="md:flex md:items-center">
          <img src={UIUX} alt="" className="w-full md:w-[277px] rounded-t-lg md:rounded-none" />
          <div className="bg-light rounded-tr-lg">
            <h1 className="pl-4 pt-10 md:pt-[45px] pb-4 font-bold text-lg">01</h1>
            <h1 className="pl-4 font-bold text-[32px]">UI/UX</h1>
            <p className="px-4 text-justify py-24 md:py-20">
              Leave it me to realize your project into an intuitive and
              beautiful design. That understands your users'needs.
            </p>
          </div>
        </div>

        <div className="md:flex md:flex-row-reverse md:items-center">
          <img src={FE} alt="" className="w-full md:w-[277px] rounded-t-lg md:rounded-none" />
          <div className="bg-light rounded-tr-lg md:rounded-none">
            <h1 className="pl-4 pt-10 md:pt-[45px] pb-4 font-bold text-lg">02</h1>
            <h1 className="pl-4 font-bold text-[32px]">
              Front End Development
            </h1>
            <p className="px-4 text-justify py-24 md:py-14">
              Leave it me to realize your project into an intuitive and
              beautiful design. That understands your users'needs.
            </p>
          </div>
        </div>

        <div>
          <img src={PM} alt="" />
          <div className="bg-light">
            <h1 className="pl-4 pt-10 pb-4 font-bold text-lg">03</h1>
            <h1 className="pl-4 font-bold text-[32px]">Product Management</h1>
            <p className="px-4 text-justify py-24">
              Are you need someone to manage your project? Cool, you can work
              together with me for manage your project. I am familiar with
              design thinking. agile methodology and design sprint.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
