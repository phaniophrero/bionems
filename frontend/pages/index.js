import Head from "next/head";
// import { useState, useEffect } from "react";
import SliderHero from "../components/slider/sliderHero";
import StorySection from "../components/home page/storySection";
import TourSection from "../components/home page/tourSection";
import NewsletterSection from "../components/home page/newsletterSection";
import HomeFilteredProducts from "../components/home page/filtered products/home-filtered-products";
import Layout from "../components/layout/layout";

import fs from "fs/promises";
import path from "path";
import NavbarSections from "../components/navbar/navbar-sections";
import { getAllCategories, getAllProducts } from "../helpers/api-util";

export default function Home(props) {
  const { data, productsData, tourData } = props;

  // console.log(data);

  return (
    <Layout>
      <Head>
        <title>Bionems</title>
        <meta
          name="description"
          content="Bionems - Createur des nems bio avec la spécialité de la cuisinée Vietnamien en BIO Cuisine."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavbarSections />
      <SliderHero />
      <HomeFilteredProducts data={data} productsData={productsData} />

      <StorySection />
      <TourSection tourData={tourData} />
      <NewsletterSection />
    </Layout>
  );
}

export async function getStaticProps() {
  const allProducts = await getAllProducts();
  // const allProducts = await response.json();

  const allCategories = await getAllCategories();
  // const allCategories = await responseCategory.json();

  const tourPath = path.join(process.cwd(), "data", "tour-data.json");
  const tourJsonData = await fs.readFile(tourPath);
  const tourData = JSON.parse(tourJsonData);

  if (!allProducts) {
    return {
      notFound: true,
    };
  }

  if (!allCategories) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: allCategories,
      productsData: allProducts,
      tourData: tourData.tourData,
    },
  };
}
