import { ProductCard } from "@/components/product-card";
import { Product } from "@/types";

async function getData() {
  const apiUrl = process.env.API_URL + "/products";
  console.log("Fetching products from:", apiUrl);

  try {
    const res = await fetch(apiUrl);
    if (res.ok) {
      return res.json();
    } else {
      console.error("Failed to fetch products:", res.statusText);
      return null;
    }
  } catch (error) {
    console.error("Network error:", error);
    return null;
  }
}

export default async function ShopPage() {
  const data = await getData();
  console.log("Fetched data:", data);

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
