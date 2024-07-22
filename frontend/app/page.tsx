import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 justify-center flex-col items-center">
      <h1 className="text-5xl font-bold text-white">
        E-Commerce built with React and .NET
      </h1>
      <p className="text-lg mt-5 text-secondary-color">
        This is a personal project made to learn about React and .NET
      </p>
      <Link href="/shop">
        <Button variant="outline" className="mt-5">
          Get Started
        </Button>
      </Link>
    </main>
  );
}
