async function getProducts() {
  try {
    const response = await fetch('/api/products');
    const products = await response.json();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

async function getProductById(productId) {
  try {
    const response = await fetch(`/api/products/${productId}`);
    const product = await response.json();
    return product;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

async function createProduct(productData) {
  try {
    const response = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(productData),
    });
    const newProduct = await response.json();
    return newProduct;
  } catch (error) {
    console.error('Error creating product:', error);
    return null;
  }
}

export { getProducts, getProductById, createProduct };