import React from 'react';
import './App.scss';
import InputField from './components/inputField/inputField';

function App() {
  return (
    <div className="App">
      <div className="container">
        <a href="#">Aus tax calculator</a>
        <InputField name="income" placeholder="Enter income"></InputField>
      </div>
    </div>
  );
}

export default App;
