import React, { useState, useEffect } from 'react';
import './App.scss';
import { InputField } from './components/InputField';
import { Table } from './components/IncomeTable/Table';

export const App = () => {
  const [amount, setAmount] = useState(0);
  const [tableAmounts, setTableAmounts] = useState(0);

  console.log('amount', amount);

  useEffect(() => {
    setTableAmounts(amount);
  }, [amount]);

  console.log('tableAmounts', tableAmounts);

  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center p-5">Aus Tax Calculator</h1>
        <InputField setAmount={setAmount}></InputField>
        <Table tableAmounts={tableAmounts}></Table>
      </div>
    </div>
  );
};
