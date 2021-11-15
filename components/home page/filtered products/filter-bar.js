import React from "react";

const FilterBar = (props) => {
  const { data, selectedCategoryHandler, selectedCategory } = props;

  return (
    <header>
      <ul className="home__filtered-products--bar">
        {data.map((category, index) => (
          <li
            key={index}
            className={`filtered-item ${
              selectedCategory === category.name ? "active" : ""
            }`}
            onClick={() => selectedCategoryHandler(category.name)}
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
