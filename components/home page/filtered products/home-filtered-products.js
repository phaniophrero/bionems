import React, { useState } from "react";
import FilterBar from "./filter-bar";
import FilterContent from "./filter-content";
import NavbarCategories from "./navbarCategories";

const HomeFilteredProducts = (props) => {
  const { data, productsData } = props;
  const [selectedCategory, setSelectedCategory] = useState(data[0].name);
  const selectedCategoryHandler = (name) => setSelectedCategory(name);

  const filteredProducts = productsData.filter(product => product.category === selectedCategory)

  return (
    <div className="home__filtered-products">
      <FilterBar
        data={data}
        selectedCategoryHandler={selectedCategoryHandler}
        selectedCategory={selectedCategory}
      />
      <FilterContent filteredProducts = { filteredProducts } />
    </div>
  );
};

export default HomeFilteredProducts;
