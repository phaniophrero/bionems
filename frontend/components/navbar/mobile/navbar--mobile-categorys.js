import React, { useEffect } from "react";
import data from "../../../data/products-categorys-data.json";
import { useDispatch, useSelector } from "react-redux";
import { getProductsCategoryAction } from "../../../redux/actions/getProductsCategoryAction";

const NavbarMobileCategorys = (props) => {
  const categorysData = data.productsCategorysData;
  const { isActiveHandler } = props

  const dispatch = useDispatch();
  const selectedProductsCategory = useSelector(
    (state) => state.selectedProductsCategory
  );
  const { myCategory } = selectedProductsCategory;

  const selectCategoryHandler = (name, value) => {
      dispatch(getProductsCategoryAction(name, value))
      isActiveHandler()
  }

  return (
    <div className="navbar-mobile--categorys">
      {categorysData.map((category, index) => (
        <p
          className={`burger-category ${
            myCategory === category.name && "active"
          }`}
          key={index} onClick={() =>selectCategoryHandler(category.name, category.id)}
        >
          {category.name}
        </p>
      ))}
    </div>
  );
};

export default NavbarMobileCategorys;
