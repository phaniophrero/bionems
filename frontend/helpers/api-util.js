import { API_URL } from "../config";

export async function getAllProducts() {
  const response = await fetch(`${API_URL}/api/products/`);

  const data = await response.json();

  const products = [];

  for (const key in data) {
    products.push({
      id: key,
      ...data[key],
    });
  }

  return products;
}

export async function getAllCategories() {
  const response = await fetch(`${API_URL}/api/categories/`);

  const data = await response.json();

  const categories = [];

  for (const key in data) {
    categories.push({
      id: key,
      ...data[key],
    });
  }

  return categories;
}

export async function getProductBySlug(slug) {
  const allProducts = await getAllProducts();
  return allProducts.find((product) => product.slug === slug);
}
