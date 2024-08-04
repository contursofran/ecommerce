import { ProductCard } from "@/components/product-card";
import { Product } from "@/types";
import { promises as fs } from "fs";
async function getDataFromJsonFile() {
  const file = await fs.readFile(process.cwd() + "/data.json", "utf8");
  const data = JSON.parse(file);
  return data;
}

export default async function ShopPage() {
  const data = await getDataFromJsonFile();

  return (
    <div className="pt-8 max-w-5xl grid grid-cols-3 gap-8 mx-auto w-full">
      {data.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
