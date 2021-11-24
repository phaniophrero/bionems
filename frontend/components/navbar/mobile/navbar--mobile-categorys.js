import React, { useEffect, useState } from "react";
import data from "../../../data/products-categorys-data.json";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getProductsCategoryAction } from "../../../redux/actions/getProductsCategoryAction";
import { API_URL } from "../../../config/index";

const NavbarMobileCategorys = (props) => {
  // const categorysData = data.productsCategorysData;
  const { isActiveHandler } = props;

  const router = useRouter();

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/categories/`)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  // console.log(data);

  const dispatch = useDispatch();
  const selectedProductsCategory = useSelector(
    (state) => state.selectedProductsCategory
  );
  const { myCategory } = selectedProductsCategory;

  const selectCategoryHandler = (name, value) => {
    dispatch(getProductsCategoryAction(name, value));
    // de facut sa redirectioneze cand selectionezi categoria din hamburger menu sa te duca la categoria respectiva
    // router.push("/");
    isActiveHandler();
  };

  return (
    <div className="navbar-mobile--categorys">
      {data &&
        data.map((category, index) => (
          <p
            className={`burger-category ${
              myCategory === category.name && "active"
            }`}
            key={index}
            onClick={() => selectCategoryHandler(category.name, index)}
          >
            {category.name}
          </p>
        ))}
    </div>
  );
};

export default NavbarMobileCategorys;
