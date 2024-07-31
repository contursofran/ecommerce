"use client";

import { CartMenu } from "@/components/cart-sheet";
import { cn } from "@/lib/utils";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  currentPath: string;
  children: React.ReactNode;
}

const NavLink = ({ href, currentPath, children }: NavLinkProps) => {
  const isActive = currentPath === href;
  return (
    <Link href={href} className="h-full items-center flex">
      <div
        className={cn(
          isActive ? "font-bold text-white" : "text-secondary-color",
          "hover:font-bold hover:text-white"
        )}
      >
        {children}
      </div>
    </Link>
  );
};

export default function Topbar() {
  const currentPath = usePathname();

  return (
    <nav className="h-12 justify-between max-w-5xl px-6 border border-[#2E2E2E] bg-black rounded-2xl mx-auto mt-5 w-full flex items-center">
      <div className="flex gap-12 font-medium h-full items-center text-sm">
        <div className="text-secondary-color font-bold">E-Commerce</div>
        <NavLink href="/" currentPath={currentPath}>
          Home
        </NavLink>
        <NavLink href="/shop" currentPath={currentPath}>
          Shop
        </NavLink>
        <NavLink href="/about" currentPath={currentPath}>
          About
        </NavLink>
      </div>
      <div>
        <CartMenu />
      </div>
    </nav>
  );
}
