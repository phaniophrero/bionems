import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductsCategoryAction } from "../../../redux/actions/getProductsCategoryAction";

const FilterBarMobileSelectedCategory = (props) => {
  const dispatch = useDispatch();
  const {
    category,
    index,
    setCurrentCategoryIndex,
    myCategory,
    currentCategoryIndex,
    selectCategoryHandler,
  } = props;

  useEffect(() => {
      const test = (index === currentCategoryIndex ? category.name : '')
    dispatch((getProductsCategoryAction(test, index)))
  }, [currentCategoryIndex])

  return <p>{category.name}</p>;
};

export default FilterBarMobileSelectedCategory;
