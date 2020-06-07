import { atom } from 'recoil';

export const IncomeState = atom({
  key: 'incomeState',
  default: 0,
});

export const AmountState = atom({
  key: 'amountState',
  default: 0,
});

export const TableState = atom({
  key: 'tableState',
  default: 0,
});
