"use client";

import React, { useEffect } from "react";
import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio";
import Achievement from "./Components/Achievement";
import Footer from "./Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const Page = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Hero />
      <Portfolio />
      <Achievement />
      <Footer />
    </>
  );
};

export default Page;
