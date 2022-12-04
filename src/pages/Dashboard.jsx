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

      <div className="mt-28 lg:mt-36 mb-5 md:mb-10 mx-10 md:mx-28 lg:mx-36 xl:mx-48">
        <div className="flex items-center">
          <h1 className="font-semibold text-[28px] lg:text-[48px] pr-2">I am a</h1>
          <Type />
        </div>
        <p className="text-lg md:mb-10 lg:text-[32px]">Data Enthusiast</p>
        <img src={Hero} alt="" />
      </div>

      <div className="mx-10 md:mx-28 lg:mx-36 xl:mx-48 md:mb-20 lg:mb-36">
        <div className="mb-10 flex">
          <div className="w-4 h-4 mr-2 bg-blue rounded-md"></div>
          <p className="text-sm">Introduction</p>
        </div>

        <h1 className="text-3xl lg:text-7xl font-bold mb-4 lg:mb-10">Learn to Learn</h1>
        <p className="text-justify lg:text-2xl lg:leading-relaxed">
          Hello! I'm <span className="font-bold">Rafli</span>, an Information Technology (IT) Student based in
          Bandung, Indonesia. I'm interest to Data Analyst and Front-end
          Development. I love visualization data because its look beautiful and
          manifesting what i think. I love to learn anything about technology, i
          can be project manager on a big project. I'm constansly evolving,
          learning and growing so you can expect that working with me is going
          to be a fun and exciting ride. Cool, now that you know me for me, how
          may i help you today?
        </p>
      </div>

      <div className="mx-10 md:mx-28 lg:mx-36 xl:mx-48 mt-10 md:mb-24">
        <div className="md:flex md:items-center">
          <img src={UIUX} alt="" className="w-full md:w-[272px] lg:w-[370px] xl:w-[450px]" />
          <div className="">
            <h1 className="pl-4 lg:pl-8 pt-10 md:pt-[69px] lg:pt-[75px] pb-4 font-bold text-lg xl:text-2xl">01</h1>
            <h1 className="pl-4 lg:pl-8 font-bold text-[32px] lg:text-[48px] xl:text-[60px]">UI/UX</h1>
            <p className="px-4 lg:px-8 text-justify py-24 md:py-16 lg:py-[130px] xl:py-[150px] lg:text-xl">
              Leave it me to realize your project into an intuitive and
              beautiful design. That understands your users'needs.
            </p>
          </div>
        </div>

        <div className="md:flex md:flex-row-reverse md:items-center">
          <img src={FE} alt="" className="w-full md:w-[272px] lg:w-[368px] xl:w-[450px] " />
          <div className="">
            <h1 className="pl-4 lg:pl-8 pt-10 md:pt-[40px] pb-4 font-bold text-lg">02</h1>
            <h1 className="pl-4 lg:pl-8 font-bold text-[32px] lg:text-[36px]">Front End Development</h1>
            <p className="px-4 lg:px-8 text-justify py-24 md:py-14 lg:py-[130px] lg:text-xl">
              Leave it me to realize your project into an intuitive and
              beautiful design. That understands your users'needs.
            </p>
          </div>
        </div>

        

        <div className="md:flex md:items-center">
          <img src={PM} alt="" className="w-full md:w-[272px] lg:w-[368px] xl:w-[450px] " />
          <div className="">
            <h1 className="pl-4 lg:pl-8 pt-10 md:pt-[40px] pb-4 font-bold text-lg">03</h1>
            <h1 className="pl-4 lg:pl-8 font-bold text-[32px] lg:text-[36px]">Product Management</h1>
            <p className="px-4 lg:px-8 text-justify lg:text-xl py-24 md:py-5 lg:py-[92px]">
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
