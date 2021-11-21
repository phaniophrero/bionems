import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { getProductsCategoryAction } from "../../../redux/actions/getProductsCategoryAction";
import FilterBarMobileSelectedCategory from "./filter-bar--mobile--selected-category";

const FilterBarMobile = (props) => {
  const { data } = props;

  const dispatch = useDispatch();
  const selectedProductsCategory = useSelector(
    (state) => state.selectedProductsCategory
  );
  const { myCategory, myCategoryValue } = selectedProductsCategory;

  const [currentCategoryIndex, setCurrentCategoryIndex] =
    useState(myCategoryValue);

  useEffect(() => {
    setCurrentCategoryIndex(myCategoryValue);
  }, [myCategoryValue]);

  const selectCategoryHandler = (name, value) => {
    dispatch(getProductsCategoryAction(name, value));
  };

  const length = data.length;
  const nextHandler = () =>
    currentCategoryIndex === length - 1
      ? setCurrentCategoryIndex(0)
      : setCurrentCategoryIndex(currentCategoryIndex + 1);
  const prevHandler = () =>
    currentCategoryIndex === 0
      ? setCurrentCategoryIndex(length - 1)
      : setCurrentCategoryIndex(currentCategoryIndex - 1);
  // console.log(currentCategoryIndex);

  return (
    <div className="filter-bar--mobile">
      <div className="prev-image" onClick={prevHandler}>
        <Image src="/assets/slider/left.svg" alt="prev" layout="fill" />
      </div>

      <div className="filtered-bar--mobile-content">
        <div className="filtered-category">
          {data.map(
            (category, index) =>
              index == currentCategoryIndex && (
                <FilterBarMobileSelectedCategory
                  category={category}
                  key={index}
                  index={index}
                  setCurrentCategoryIndex={setCurrentCategoryIndex}
                  myCategory={myCategory}
                  selectCategoryHandler={selectedProductsCategory}
                  currentCategoryIndex={currentCategoryIndex}
                />
              )
          )}
        </div>

        {/* <div className="filtered-category--dots">
          {data.map((item, index) => (
            <div
              onClick={() => selectCategoryHandler(item.name, item.id)}
              key={index}
              className={`cat-dot ${item.name === myCategory && "active"}`}
            />
          ))}
        </div> */}
      </div>

      <div className="next-image" onClick={nextHandler}>
        <Image src="/assets/slider/right.svg" alt="prev" layout="fill" />
      </div>
    </div>
  );
};

export default FilterBarMobile;
