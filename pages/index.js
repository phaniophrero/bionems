import { useState } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> a269169b8a1132fa84d21a0e02a316119a04c1b6
import SliderHero from "../components/slider/sliderHero";
import StorySection from "../components/home page/storySection";
import TourSection from "../components/home page/tourSection";
import NewsletterSection from "../components/home page/newsletterSection";
import HomeFilteredProducts from "../components/home page/filtered products/home-filtered-products";

import fs from 'fs/promises'
import path from 'path'

export default function Home(props) {
  const { data, productsData, tourData } = props

<<<<<<< HEAD
>>>>>>> b3dc5e6 (ceva de genul)
=======
>>>>>>> a269169b8a1132fa84d21a0e02a316119a04c1b6
  const [showContent, setShowContent] = useState("FirstCategory");

  const showContentHandler = (category) => {
    setShowContent(category);
  };

  return (
    <>
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> a269169b8a1132fa84d21a0e02a316119a04c1b6
      <SliderHero />
      <HomeFilteredProducts data = { data } productsData = { productsData } />

      <StorySection />
      <TourSection tourData = {tourData} />
      <NewsletterSection />
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'products-categorys-data.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)

  const tourPath = path.join(process.cwd(), 'data', 'tour-data.json')
  const tourJsonData = await fs.readFile(tourPath)
  const tourData = JSON.parse(tourJsonData)

  return {
    props: {
      data: data.productsCategorysData,
      productsData: data.products,
      tourData: tourData.tourData
    }
  }
}
<<<<<<< HEAD
>>>>>>> b3dc5e6 (ceva de genul)
=======
>>>>>>> a269169b8a1132fa84d21a0e02a316119a04c1b6
