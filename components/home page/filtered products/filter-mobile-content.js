import React from "react";
import Link from "next/link";
import Image from "next/image";
import categorys from "../../../data/products-categorys-data.json";
import { useDispatch, useSelector } from "react-redux";
import { getProductsCategoryAction } from "../../../redux/actions/getProductsCategoryAction";

const FilterMobileContent = () => {
  const data = categorys.productsCategorysData;

  const dispatch = useDispatch();
  const selectedProductsCategory = useSelector(
    (state) => state.selectedProductsCategory
  );
  const { myCategory, myCategoryValue } = selectedProductsCategory;

  return (
    <div className="filter-bar-mobile-content">
      {data.map((category, index) => (
        <div
          className="card-content"
          onClick={() =>
            dispatch(getProductsCategoryAction(category.name, category.id))
          }
          key={index}
        >
          <div className="box-container">
            <div className="box" key={index}>
              <Image src={category.image} alt="image" layout="fill" />
            </div>
          </div>

          <h1>{category.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default FilterMobileContent;
