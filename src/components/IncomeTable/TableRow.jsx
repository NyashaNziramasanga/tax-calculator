import React, { Fragment } from 'react';

const TableRow = (props) => {
  const annualTax = props.tableAmounts.tableAmounts.annualTax;
  const pay = props.tableAmounts.tableAmounts.pay;

  return (
    <Fragment>
      <tr>
        <td className="border px-10 py-2">Pay</td>
        <td className="border px-10 py-2">-</td>
        <td className="border px-10 py-2">-</td>
        <td className="border px-10 py-2">-</td>
        <td className="border px-10 py-2">{pay}</td>
      </tr>
      <tr>
        <td className="border px-10 py-2">Taxable Income</td>
        <td className="border px-10 py-2">-</td>
        <td className="border px-10 py-2">-</td>
        <td className="border px-10 py-2">-</td>
        <td className="border px-10 py-2">-</td>
      </tr>
      <tr>
        <td className="border px-10 py-2">Pay</td>
        <td className="border px-10 py-2">-</td>
        <td className="border px-10 py-2">-</td>
        <td className="border px-10 py-2">-</td>
        <td className="border px-10 py-2">-</td>
      </tr>
      <tr>
        <td className="border px-10 py-2">Taxes</td>
        <td className="border px-10 py-2">-</td>
        <td className="border px-10 py-2">-</td>
        <td className="border px-10 py-2">-</td>
        <td className="border px-10 py-2">{annualTax}</td>
      </tr>
    </Fragment>
  );
};
export default TableRow;
