export const taxCalculator = (income) => {
  let annualTax = 0;
  let pay = 0;

  const TAX_19_PERCENT = 0.19;
  const TAX_32_PERCENT = 0.325;
  const TAX_37_PERCENT = 0.37;
  const TAX_45_PERCENT = 0.45;

  if (income <= 18_201) {
    return 'Nill';
  } else if (income <= 37_001) {
    annualTax = (income * TAX_19_PERCENT).toFixed(2);
    pay = (income * (1 - TAX_19_PERCENT)).toFixed(2);
    return { annualTax, pay, income };
  } else if (income <= 90_001) {
    annualTax = (income * TAX_32_PERCENT).toFixed(2);
    pay = (income * (1 - TAX_32_PERCENT)).toFixed(2);
    return { annualTax, pay, income };
  } else if (income <= 180_000) {
    annualTax = (income * TAX_37_PERCENT).toFixed(2);
    pay = (income * (1 - TAX_37_PERCENT)).toFixed(2);
    return { annualTax, pay, income };
  } else if (income >= 180_001) {
    annualTax = (income * TAX_45_PERCENT).toFixed(2);
    pay = (income * (1 - TAX_45_PERCENT)).toFixed(2);
    return { annualTax, pay, income };
  }
};
