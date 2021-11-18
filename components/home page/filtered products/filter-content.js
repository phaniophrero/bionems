import React from "react";
import Image from "next/image";
import Link from "next/link";

const FilterContent = (props) => {
  const { filteredProducts } = props;

  return (
    <div className="home__filtered-products--content">
      {filteredProducts.map((product, index) => (
        <Link href={product.slug} key={index}>
          <a>
            <div className="card">
              <div className="image-container">
                <div className="image">
                  <Image src={product.image} alt="image" layout="fill" />
                </div>
              </div>

              <div className="name">
                <h1>{product.name}</h1>
              </div>

              <ul className="ingredients">
                {product.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient.name}</li>
                ))}
              </ul>

              <div className="price">
                <h4>{product.price} €</h4>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default FilterContent;
