/*
 *type MyPartial<T> = {
  *[K in keyof T]?: T[K];};
 
 */

interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
}


function updateProduct(id: number, updatedData: Partial<Product>) {
  console.log(`Updating product ${id} with:`, updatedData);
}

interface Product2 {
  id: number;
  title: string;
  price: number;
  stock: number;
}
interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
}

function showProductCard(product: Pick<Product, "title" | "price">) {
  console.log(`${product.title} - ${product.price} taka`);
}

showProductCard({ title: "Rose Bouquet", price: 500 }); 