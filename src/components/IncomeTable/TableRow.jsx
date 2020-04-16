import React, { Fragment } from 'react';

const TableRow = (props) => {
  return (
    <Fragment>
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
        <td className="border px-10 py-2">{props.table}</td>
      </tr>
    </Fragment>
  );
};
export default TableRow;
