import React, { useState, useEffect } from "react";
import SliderHero from "../components/slider/sliderHero";
import StorySection from "../components/home page/storySection";
import TourSection from "../components/home page/tourSection";
import NewsletterSection from "../components/home page/newsletterSection";
import HomeFilteredProducts from "../components/home page/filtered products/home-filtered-products";

import fs from 'fs/promises'
import path from 'path'
import NavbarSections from '../components/navbar/navbar-sections';

export default function Home(props) {
  const { data, productsData, tourData } = props;

  return (
    <>

    <NavbarSections />
    <SliderHero />
      <HomeFilteredProducts data = { data } productsData = { productsData } />

      {/* <SliderHero />
      <HomeFilteredProducts data={data} productsData={productsData} /> */}


      <StorySection />
      <TourSection tourData={tourData} />
      <NewsletterSection />
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'products-categorys-data.json')
  const jsonData = await fs.readFile(filePath)
  const data = JSON.parse(jsonData)

  // const response = await fetch("http://127.0.0.1:8000/api/products/");
  // const allProducts = await response.json();

  // const responseCategory = await fetch("http://127.0.0.1:8000/api/categories/");
  // const allCategories = await responseCategory.json();

  const tourPath = path.join(process.cwd(), "data", "tour-data.json");
  const tourJsonData = await fs.readFile(tourPath);
  const tourData = JSON.parse(tourJsonData);

  // if (!allProducts) {
  //   return {
  //     notFound: true,
  //   };
  // }

  // if (!allCategories) {
  //   return {
  //     notFound: true,
  //   };
  // }

  console.log(data.products)

  return {
    props: {
      data: data.productsCategorysData,
      productsData: data.products,
      tourData: tourData.tourData,
    },
  };
}
