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

export async function getProductBySlug(slug) {
  const allProducts = await getAllProducts();
  return allProducts.find((product) => product.slug === slug);
}

export async function getProductByCategory(category) {
  const allProducts = await getAllProducts();
  return allProducts.find((product) => product.category === category);
}
