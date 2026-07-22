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

