export const taxCalculator = (income) => {
  let annualTax = 0;

  const TAX_19_PERCENT = 0.19;
  const TAX_32_PERCENT = 0.325;
  const TAX_37_PERCENT = 0.37;
  const TAX_45_PERCENT = 0.45;

  if (income <= 18_201) {
    console.log('Not Taxable');
    return 'Nill';
  } else if (income <= 37_001) {
    console.log('Taxed at 19%');
    annualTax = (income * TAX_19_PERCENT).toFixed(2);
    return annualTax;
  } else if (income <= 90_001) {
    console.log('Taxed at 32.5%');
    annualTax = (income * TAX_32_PERCENT).toFixed(2);
    return annualTax;
  } else if (income <= 180_000) {
    console.log('Taxed at 37%');
    annualTax = (income * TAX_37_PERCENT).toFixed(2);
    return annualTax;
  } else if (income >= 180_001) {
    console.log('Taxed at 45%');
    annualTax = (income * TAX_45_PERCENT).toFixed(2);
    return annualTax;
  }
};
