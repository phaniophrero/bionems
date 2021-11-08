import { useState } from "react";
// import Head from "next/head";
// import Image from "next/image";
import NavbarTop from "../components/navbar/navbarTop";
import NavbarHome from "../components/navbar/navbarHome";
import NavbarCategories from "../components/navbar/navbarCategories";
import SliderHero from "../components/slider/sliderHero";
import navbarData from "../data/navbarData";
import StorySection from "../components/sections/storySection";
import TourSection from "../components/sections/tourSection";
import NewsletterSection from "../components/sections/newsletterSection";
import Footer from "../components/footer/footer";

export default function Home() {
  const [showContent, setShowContent] = useState("FirstCategory");

  const showContentHandler = (category) => {
    setShowContent(category);
  };

  return (
    <>
      <NavbarTop />
      <NavbarHome />
      <SliderHero />
      <NavbarCategories
        showContent={showContent}
        navbarData={navbarData}
        showContentHandler={() => showContentHandler()}
      />
      {/* {navbarData.defaultCategory || showContent === "FirstCategory" && <Nems/>} */}

      <StorySection />
      {/* <TourSection /> */}
      <NewsletterSection />

      <Footer />
    </>
  );
}
