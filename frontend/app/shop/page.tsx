import { ProductCard } from "@/components/product-card";
import { Product } from "@/types";
import { promises as fs } from "fs";

async function getData() {
  try {
    const res = await fetch(process.env.API_URL + "/products");
    if (res.ok) {
      return res.json();
    } else {
      console.error("Failed to fetch products:", res.statusText);
    }
  } catch (error) {
    console.error("Network error:", error);
  }
}

export default async function ShopPage() {
  const data = await getData();
  console.log(data);
  return (
    <div className="pt-8 max-w-5xl grid grid-cols-3 gap-8 mx-auto w-full">
      {data ? (
        data.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="text-center col-span-3">
          Failed to load products. Please try again later.
        </p>
      )}
    </div>
  );
}
