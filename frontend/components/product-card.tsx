import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  price: number;
  image: string;
}

export function ProductCard({ title, price, image }: ProductCardProps) {
  return (
    <div className="bg-black rounded-2xl shadow-lg text-white w-full border border-[#2E2E2E] col-span-1 row-span-1 h-full aspect-square">
      <div className="relative h-full w-full">
        <img
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
          <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
            <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
              {title}
            </h3>
            <Price
              className="flex-none rounded-full bg-blue-600 p-2 text-white"
              amount={price.toString()}
              currencyCodeClassName="hidden @[275px]/label:inline"
              currencyCode="USD"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

const Price = ({
  amount,
  className,
  currencyCode = "USD",
  currencyCodeClassName,
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
} & React.ComponentProps<"p">) => (
  <p suppressHydrationWarning={true} className={className}>
    {`${new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: currencyCode,
      currencyDisplay: "narrowSymbol",
    }).format(parseFloat(amount))}`}
    <span
      className={cn("ml-1 inline", currencyCodeClassName)}
    >{`${currencyCode}`}</span>
  </p>
);
