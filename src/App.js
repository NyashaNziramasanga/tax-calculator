import React, { useState, useEffect } from 'react';
import './App.scss';
import InputField from './components/InputField';
import IncomeTable from './components/IncomeTable/Table';

const App = () => {
  const [amount, setAmount] = useState(0);
  const [tableAmounts, setTableAmounts] = useState(0);

  useEffect(() => {
    setTableAmounts(amount);
  }, [amount]);

  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center p-5">Aus Tax Calculator</h1>
        <InputField setAmount={setAmount}></InputField>
        <IncomeTable tableAmounts={tableAmounts}></IncomeTable>
      </div>
    </div>
  );
};

export default App;
