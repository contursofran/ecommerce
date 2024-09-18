import { ProductCard } from "@/components/product-card";
import { Product } from "@/types";
import { promises as fs } from "fs";

async function getData() {
  const res = await fetch("http://localhost:5247/api/Products");
  if (res.ok) {
    return res.json();
  }
}

export default async function ShopPage() {
  const data = await getData();
  console.log(data);
  return (
    <div className="pt-8 max-w-5xl grid grid-cols-3 gap-8 mx-auto w-full">
      {data.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
