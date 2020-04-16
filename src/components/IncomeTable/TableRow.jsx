import React, { Fragment } from 'react';

const TableRow = () => {
  return (
    <Fragment>
      <tr>
        <td className="border px-4 py-2">Taxable Income</td>
        <td className="border px-4 py-2">100</td>
        <td className="border px-4 py-2">858</td>
        <td className="border px-4 py-2">858</td>
        <td className="border px-4 py-2">858</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">Pay</td>
        <td className="border px-4 py-2">200</td>
        <td className="border px-4 py-2">858</td>
        <td className="border px-4 py-2">858</td>
        <td className="border px-4 py-2">858</td>
      </tr>
      <tr>
        <td className="border px-4 py-2">Taxes</td>
        <td className="border px-4 py-2">300</td>
        <td className="border px-4 py-2">858</td>
        <td className="border px-4 py-2">858</td>
        <td className="border px-4 py-2">858</td>
      </tr>
    </Fragment>
  );
};
export default TableRow;
