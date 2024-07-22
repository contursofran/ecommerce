"use client";

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
          isActive ? "font-bold" : "text-[#fffc]",
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
    <nav className="h-12 justify-between max-w-5xl px-6 border border-[#1a1b1b] bg-black rounded-2xl mx-auto mt-5 w-full flex items-center">
      <div className="flex gap-12 font-medium h-full items-center text-sm">
        <div className="text-[#fff] font-bold">E-Commerce</div>
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
        <ShoppingCart className="h-4 w-4 text-[#fffc] hover:text-white cursor-pointer" />
      </div>
    </nav>
  );
}
