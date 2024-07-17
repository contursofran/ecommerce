"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Topbar() {
  const currentPath = usePathname();

  return (
    <nav className="h-12 max-w-5xl">
      <div className="flex gap-12 font-medium text-base">
        <Link href="/">
          <div className={currentPath === "/" ? "font-bold" : ""}>Home</div>
        </Link>
        <Link href="/shop">
          <div className={currentPath === "/shop" ? "font-bold" : ""}>Shop</div>
        </Link>
        <Link href="/about">
          <div className={currentPath === "/about" ? "font-bold" : ""}>
            About
          </div>
        </Link>
      </div>
    </nav>
  );
}
