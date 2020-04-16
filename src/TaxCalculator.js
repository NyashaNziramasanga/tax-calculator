export const taxCalculator = (income) => {
  if (income <= 18_201) {
    console.log('Not Taxable');
  } else if (income <= 37_001) {
    console.log('Taxed at 19%');
  } else if (income <= 90_001) {
    console.log('Taxed at 32.5%');
  } else if (income <= 180_000) {
    console.log('Taxed at 37%');
  } else if (income >= 180_001) {
    console.log('Taxed at 45%');
  }
};
