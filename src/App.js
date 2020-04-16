import React from 'react';
import './App.scss';
import InputField from './components/InputField';
import IncomeTable from './components/IncomeTable/Table';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Aus Tax Calculator</h1>
        <InputField></InputField>
        <IncomeTable></IncomeTable>
      </div>
    </div>
  );
}

export default App;
