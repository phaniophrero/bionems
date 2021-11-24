import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsCategoryAction } from "../../../redux/actions/getProductsCategoryAction";
import { selectedProductsCategoryReducer } from "../../../redux/reducers/selectedProductsCategoryReducer";

const FilterBar = (props) => {
  const { data, selectedCategoryHandler, selectedCategory } = props;

  const dispatch = useDispatch();
  const selectedProductsCategory = useSelector(
    (state) => state.selectedProductsCategory
  );
  const { myCategory, myCategoryValue } = selectedProductsCategory;

  return (
    <header>
      <ul className="home__filtered-products--bar">
        {data.map((category, index) => (
          <li
            key={index}
            className={`filtered-item ${
              myCategory === category.name ? "active" : ""
            }`}
            onClick={() =>
              dispatch(getProductsCategoryAction(category.name, index))
            }
          >
            {category.name}
          </li>
        ))}
      </ul>

      <div className="line" />
    </header>
  );
};

export default FilterBar;
