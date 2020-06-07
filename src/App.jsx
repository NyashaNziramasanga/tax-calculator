import React, { useEffect } from 'react';
import './App.scss';
import { InputField } from './components/InputField';
import { Table } from './components/IncomeTable/Table';
import { AmountState, TableState } from './Atom';
import { useRecoilState } from 'recoil';

export const App = () => {
  const [amount, setAmount] = useRecoilState(TableState);
  const [, setTableAmounts] = useRecoilState(AmountState);

  useEffect(() => {
    setTableAmounts(amount);
  }, [amount, setTableAmounts]);

  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center p-5">Tax Calculator</h1>
        <InputField setAmount={setAmount}></InputField>
        <Table></Table>
      </div>
    </div>
  );
};
