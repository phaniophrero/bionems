import React, { useState, useRef, useEffect } from "react";
import FilterBar from "./filter-bar";
import FilterContent from "./filter-content";
import FilterBarMobile from "./filter-bar--mobile";
import { useSelector, useDispatch } from "react-redux";
import FilterMobileContent from "./filter-mobile-content";
import { getProductsCategoryAction } from "../../../redux/actions/getProductsCategoryAction";

const HomeFilteredProducts = (props) => {
  const { data, productsData } = props;

  const selectedProductsCategory = useSelector(
    (state) => state.selectedProductsCategory
  );
  const { myCategory, myCategoryValue } = selectedProductsCategory;

  const filteredProducts = productsData.filter(
    (product) => product.category === myCategory
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (window.innerWidth < 690) {
      dispatch(getProductsCategoryAction("", 0));
    }
  }, []);

  return (
    <div className="home__filtered-products" id="produits">
      <FilterBar data={data} />
      {myCategory && <FilterBarMobile data={data} />}

      {!myCategory ? (
        <FilterMobileContent />
      ) : (
        <FilterContent filteredProducts={filteredProducts} />
      )}
    </div>
  );
};

export default HomeFilteredProducts;
