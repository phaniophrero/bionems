export async function getAllProducts() {
  const response = await fetch("http://127.0.0.1:8000/api/products/");

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
  const response = await fetch("http://127.0.0.1:8000/api/categories/");

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
