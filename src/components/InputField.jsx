import React from 'react';

const InputField = () => {
  return (
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 m-10">
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          for="income"
        >
          Enter Annual Income
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="income"
          type="number"
          placeholder="Income"
        />
      </div>
    </form>
  );
};
export default InputField;
