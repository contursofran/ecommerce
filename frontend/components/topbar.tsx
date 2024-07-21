"use client";

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
      <div className={isActive ? "font-bold" : "text-[#fffc]"}>{children}</div>
    </Link>
  );
};

export default function Topbar() {
  const currentPath = usePathname();

  return (
    <nav className="h-12 max-w-5xl px-6 border border-[#1a1b1b] bg-black rounded-2xl mx-auto mt-5 w-full flex items-center">
      <div className="flex gap-12 font-medium h-full items-center text-sm">
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
    </nav>
  );
}
