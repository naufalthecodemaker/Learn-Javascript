export function formatCurrency(priceCents){
  return (Math.round(priceCents) / 100).toFixed(2);
}

export default formatCurrency;
// export default dipake kalo hanya ada 1 function yg mau diexport keluar file