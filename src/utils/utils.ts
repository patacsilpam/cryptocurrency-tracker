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
