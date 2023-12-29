"use client";

import React, { useEffect, useState } from "react";
import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio";
import Achievement from "./Components/Achievement";
import Footer from "./Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Components/Navbar";

const Page = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const changeBackground = () => {
      window.scrollY > 10 ? setIsScroll(true) : setIsScroll(false);
    };

    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  useEffect(() => {
    const getNameSection = () => {
      const sections = document.querySelectorAll("section.container");
      let currentActiveSection = "";

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const rect = section.getBoundingClientRect();

        if (rect.top <= 200) {
          currentActiveSection = section.id;
          break;
        }
      }

      setActiveSection(currentActiveSection);
    };

    window.addEventListener("scroll", getNameSection);

    return () => {
      window.removeEventListener("scroll", getNameSection);
    };
  }, [activeSection]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} isScroll={isScroll} />
      <Hero />
      <Portfolio />
      <Achievement />
      <Footer />
    </>
  );
};

export default Page;
