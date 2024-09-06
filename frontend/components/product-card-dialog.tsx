"use client";

import {
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Dialog } from "@radix-ui/react-dialog";
import Image from "next/image";
import { Price } from "@/components/price";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import useStore from "@/hooks/useStore";
import { useCartStore } from "@/lib/store";
import { Product } from "@/types";
import { useState } from "react";

interface ProductCardPopoverProps {
  product: Product;
  children: React.ReactNode;
}

export function ProductCardDialog({
  children,
  product,
}: ProductCardPopoverProps) {
  const { image, title, price } = product;
  const cartState = useStore(useCartStore, (state) => state);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = () => {
    cartState?.addToCart({ ...product, UID: Math.random() });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="w-[800px] bg-black">
        <div className="h-[450px] flex justify-between ">
          <div className="relative flex items-center justify-center w-1/2">
            <Image fill src={image} className="object-contain" alt={title} />
          </div>
          <div className="flex pl-4 pt-4 flex-col h-full w-1/2">
            <div className="flex flex-col h-full w-full gap-3">
              <h1 className="text-lg font-semibold">{title}</h1>
              <Price
                className="flex-none rounded-full w-fit text-xs bg-white font-semibold p-2 text-black"
                amount={price.toString()}
                currencyCodeClassName="hidden @[275px]/label:inline"
                currencyCode="USD"
              />
              <div className="h-[0.8px] w-full bg-[#2e2e2e]"></div>
              <div className="font-semibold mt-4 text-xs flex flex-col gap-3">
                <h2>COLOR</h2>
                <div className="flex line-through gap-4">
                  <Badge variant="outline">Red</Badge>
                  <Badge variant="outline">White</Badge>
                  <Badge variant="outline">Black</Badge>
                </div>
                <h2 className="mt-6">SIZE</h2>
                <div className="flex gap-4 line-through">
                  <Badge variant="outline">Small</Badge>
                  <Badge variant="outline">Medium</Badge>
                  <Badge variant="outline">Large</Badge>
                </div>
              </div>
            </div>
            <div className="flex justify-end pb-2 pr-4">
              <Button onClick={() => addToCart()} className="w-fit flex">
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
