import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//convert crypto price to USD
export function formattedPrice(price: number) {
  const symbol: string = "$";
  const decimalPlaces: number = 4;

  if (price < 0.1) {
    return `${symbol}${price.toExponential(4)}`;
  }
  const formattedPrice = price.toLocaleString("en-US", {
    style: "decimal",
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  });
  return `${symbol}${formattedPrice}`;
}
