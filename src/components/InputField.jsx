import React from 'react';
import { taxCalculator } from '../TaxCalculator';
import { useRecoilState } from 'recoil';
import { IncomeState } from '../Atom';

export const InputField = (props) => {
  const [income, setIncome] = useRecoilState(IncomeState);

  const onChange = (e) => setIncome(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    props.setAmount(taxCalculator(income));
  };

  return (
    <div className='md:px-32 py-8 w-full'>
      <form
        onSubmit={onSubmit}
        className='bg-white shadow-md rounded px-8 pt-5 pb-8'
      >
        <label className='block tracking-wide text-gray-700 text-md font-bold mb-2'>
          Enter Annual Income:
        </label>
        <div className='flex items-center border-b border-b-2 border-blue-600 py-2'>
          <input
            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
            id='income'
            type='number'
            placeholder='Enter Annual Income'
            value={income}
            onChange={onChange}
          />
          <button className='flex-shrink-0 bg-blue-500 hover:bg-blue-400 border-blue-500 hover:border-blue-400 text-sm border-4 text-white py-1 px-2 rounded'>
            Calculate
          </button>
        </div>
      </form>
    </div>
  );
};
