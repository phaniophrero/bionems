import React from "react";
import { useRouter } from "next/router";
import { getAllProducts } from "../helpers/api-util";
import ProductDetails from "../components/product details page/product-details";
import Layout from "../components/layout/layout";

const ProductDetailsPage = (props) => {
  const { product, allProducts } = props;

  return (
    <Layout>
      <div className="product-details-page">
        <ProductDetails product={product} allProducts={allProducts} />
      </div>
    </Layout>
  );
};

export default ProductDetailsPage;

export async function getStaticProps(context) {
  const { params } = context;
  const productSlug = params.productSlug;
  const products = await getAllProducts();

  const filteredData = products.find((data) => data.slug === productSlug);

  if (!filteredData) {
    return { notFound: true };
  }

  return {
    props: {
      product: filteredData,
      allProducts: products,
    },
  };
}

export async function getStaticPaths() {
  const products = await getAllProducts();
  const pathsWithParams = products.map((product) => ({
    params: { productSlug: product.slug },
  }));

  return {
    paths: pathsWithParams,
    fallback: false,
  };
}
