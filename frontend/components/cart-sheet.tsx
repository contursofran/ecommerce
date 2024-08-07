"use client";

import { useCartStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import useStore from "@/hooks/useStore";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShoppingCart, TrashIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function CartSheet() {
  const cartState = useStore(useCartStore, (state) => state);

  const cartCount = cartState?.cart?.length || 0;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className={cn(
            cartCount > 0 ? "w-12" : "w-8",
            "h-8 px-0 border-0 bg-black hover:bg-black"
          )}
          size="sm"
          variant="outline"
        >
          <div className="flex gap-1">
            <ShoppingCart className="h-4 w-4 text-secondary-color hover:text-white cursor-pointer" />
            {cartCount > 0 && (
              <div className="flex h-4 w-5 items-center justify-center rounded-full bg-black p-1 text-xs text-white dark:bg-white dark:text-black">
                {cartCount}
              </div>
            )}
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent className="mr-8 w-[350px] pb-2 bg-black">
        <SheetHeader className="flex w-full items-center justify-between">
          <SheetTitle>Cart</SheetTitle>
        </SheetHeader>
        {cartCount === 0 ? (
          <div className="flex h-[300px] justify-center p-2 text-center text-sm text-gray-500">
            <p className="flex items-center justify-center">
              Your cart is empty
            </p>
          </div>
        ) : (
          <div className="h-[90%] flex flex-col justify-between">
            <ScrollArea className="h-[85%] mt-4" scrollBarClassName="mx-1">
              {cartState?.cart?.map((cartItem) => (
                <div key={cartItem.id} className="mt-4">
                  {cartItem != null && (
                    <div className="flex">
                      <img
                        src={cartItem.image}
                        alt={cartItem.title}
                        className="w-16 h-16"
                      />
                      <div className="flex flex-col justify-center pl-2">
                        <p className="text-sm font-semibold">
                          {cartItem.title.length < 20
                            ? cartItem.title
                            : cartItem.title.substring(0, 20) + "..."}
                        </p>
                        <p className="text-xs text-gray-500">
                          {cartItem.price}
                        </p>
                      </div>
                      <TrashIcon
                        onClick={() => cartState.removeFromCart(cartItem.UID)}
                        className="h-4 w-4 ml-auto mr-6 self-center text-secondary-color cursor-pointer"
                      />
                    </div>
                  )}
                </div>
              ))}
            </ScrollArea>
            <Button className="">Checkout</Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
