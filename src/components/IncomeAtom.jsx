import React from 'react';
import { atom, selector } from 'recoil';

export const IncomeState = atom({
  key: 'incomeState',
  default: 0,
});
