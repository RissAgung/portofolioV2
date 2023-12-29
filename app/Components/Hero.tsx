"use client";

import Image from "next/image";
import Container from "./Container";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <Container id="home">
      <div className="w-full min-h-screen relative flex flex-col md:flex-row-reverse gap-3 justify-center md:justify-start md:items-center max-md:bg-profile max-md:bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary md:hidden"></div>

        <div
          data-aos-duration="700"
          data-aos="fade-left"
          className="max-md:hidden w-full h-full md:max-w-[340px] md:max-h-[500px] md:rounded-[60px] max-md:absolute max-md:inset-0 z-0 overflow-hidden"
        >
          <Image
            priority={false}
            src={"/Images/profile.png"}
            alt="profile"
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>

        <div
          data-aos-duration="700"
          data-aos="fade-right"
          className="relative md:absolute md:left-0 md:pl-10 z-10 flex flex-col w-full h-full gap-3 justify-center"
        >
          <div className="flex flex-col gap-3 text-secondary md:dark:text-secondary md:text-primary duration-700">
            <h1 className="uppercase leading-10 md:leading-[53px]">
              hello <br /> everyone
            </h1>
            <div className="font-semibold text-xs md:text-sm leading-4 md:leading-5 w-[75%] md:w-[50%] text-secondary2 md:dark:text-secondary2 md:text-primary2 duration-700">
              <Typewriter
                options={{
                  strings: [
                    "My name is Risqi Agung Dwi Prasetyo, I am a web developer, UI UX designer, MySQL developer and I study at Jember State Polytechnic",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>

          <button type="button" className="flex items-center w-fit gap-3">
            <p className="font-bold text-base md:text-lg text-secondary md:dark:text-secondary md:text-primary duration-700">
              Let&lsquo;s start
            </p>
            <div className="w-6 md:w-8 aspect-square rounded-full bg-[#90573B] overflow-hidden flex items-center justify-center">
              <svg
                className="w-[50%] aspect-square fill-secondary"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.293234 6.71743L5.29323 11.7174C5.38834 11.8085 5.50048 11.8798 5.62323 11.9274C5.86669 12.0274 6.13977 12.0274 6.38323 11.9274C6.50598 11.8798 6.61813 11.8085 6.71323 11.7174L11.7132 6.71743C11.8065 6.62419 11.8804 6.5135 11.9309 6.39168C11.9814 6.26986 12.0073 6.13929 12.0073 6.00743C12.0073 5.74113 11.9015 5.48573 11.7132 5.29743C11.5249 5.10912 11.2695 5.00334 11.0032 5.00334C10.7369 5.00334 10.4815 5.10912 10.2932 5.29743L7.00323 8.59743L7.00323 1.00743C7.00323 0.742211 6.89788 0.487857 6.71034 0.300321C6.5228 0.112784 6.26845 0.00742817 6.00323 0.00742817C5.73802 0.00742817 5.48366 0.112784 5.29613 0.300321C5.10859 0.487857 5.00323 0.742211 5.00323 1.00743L5.00323 8.59743L1.71323 5.29743C1.62027 5.2037 1.50967 5.12931 1.38781 5.07854C1.26595 5.02777 1.13524 5.00163 1.00323 5.00163C0.871222 5.00163 0.740516 5.02777 0.618656 5.07854C0.496797 5.12931 0.386197 5.2037 0.293234 5.29743C0.199506 5.39039 0.12511 5.50099 0.0743408 5.62285C0.023572 5.74471 -0.00256538 5.87542 -0.00256538 6.00743C-0.00256538 6.13944 0.023572 6.27015 0.0743408 6.392C0.12511 6.51386 0.199506 6.62446 0.293234 6.71743Z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
