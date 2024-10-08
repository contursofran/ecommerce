import { ProductCardDialog } from "@/components/product-card-dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Plus, ShoppingBagIcon } from "lucide-react";
import Image from "next/image";
import { Price } from "./price";
import { Product } from "@/types";
interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { image, title, price } = product;

  return (
    <ProductCardDialog product={product}>
      <div className="bg-black rounded-2xl shadow-lg hover:border-2 hover:border-white hover:cursor-pointer  text-white w-full border border-[#2E2E2E] col-span-1 row-span-1 h-full aspect-square">
        <div className="relative h-full w-full">
          <Image
            fill
            src={image}
            alt={title}
            className="
          object-contain w-full h-full rounded-2xl"
          />
          <div
            className={cn(
              "absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label",
              {
                "lg:px-20 lg:pb-[35%]": false,
              }
            )}
          >
            <div className="flex border-[#2E2E2E] bg-transparent/80 items-center rounded-full border p-1 text-xs font-semibold text-white ">
              <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                {title}
              </h3>
              <Price
                className="flex-none rounded-full bg-white p-2 text-black"
                amount={price.toString()}
                currencyCodeClassName="hidden @[275px]/label:inline"
                currencyCode="USD"
              />
            </div>
          </div>
        </div>
      </div>
    </ProductCardDialog>
  );
}
