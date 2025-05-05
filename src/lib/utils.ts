import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//convert crypto price to USD
export function formattedPrice(price: number) {
  const symbol: string = "$";
  const decimalPlaces: number = 2;

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

export function formatMarketCap(price: number) {
  if (price >= 1000000000000) {
    return `$${(price / 1000000000000).toFixed(2)}T`;
  } else if (price >= 1000000000) {
    return `$${(price / 1000000000).toFixed(2)}B`;
  } else if (price >= 1000000) {
    return `$${(price / 1000000).toFixed(2)}M`;
  } else {
    return `$${price.toLocaleString()}`;
  }
}
