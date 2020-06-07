import React, { useState } from 'react';
import { taxCalculator } from '../TaxCalculator';

export const InputField = (props) => {
  const [income, setIncome] = useState(0);

  const onChange = (e) => setIncome(e.target.value);

  console.log('InIncome', income);

  const onSubmit = (e) => {
    e.preventDefault();
    props.setAmount(taxCalculator(income));
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white shadow-md rounded px-8 pt-5 pb-8 m-10"
    >
      <div className="flex flex-wrap mx-auto ">
        <div className="w-full md:w-2/3 px-3 mb-6 md:mb-0">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="income"
            type="number"
            placeholder="Enter Annual Income"
            value={income}
            onChange={onChange}
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <button className="bg-white hover:bg-gray-100 text-gray-800 py-1 px-2 border border-gray-400 rounded shadow">
            Calculate
          </button>
        </div>
      </div>
    </form>
  );
};
