export const formatCurrency = (n) => {
  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });

  return format.format(n);
};
