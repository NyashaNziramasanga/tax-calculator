import React, { Fragment } from 'react';
import { FormatNumbers } from '../util/FormatNumbers';
import { IncomeState, AmountState } from '../../Atom';
import { useRecoilState, useRecoilValue } from 'recoil';

export const TableRow = () => {
  const annualTax = useRecoilValue(AmountState).annualTax;
  const pay = useRecoilValue(AmountState).pay;

  const [income] = useRecoilState(IncomeState);

  return (
    <Fragment>
      <tr>
        <td className="border px-10 py-2">Pay</td>
        <td className="border px-10 py-2">-</td>
        <td className="border px-10 py-2">-</td>
        <td className="border px-10 py-2">-</td>
        <td className="border px-10 py-2">
          <FormatNumbers value={pay} />
        </td>
      </tr>
      <tr>
        <td className="border px-10 py-2">Taxable Income</td>
        <td className="border px-10 py-2">-</td>
        <td className="border px-10 py-2">-</td>
        <td className="border px-10 py-2">-</td>
        <td className="border px-10 py-2">
          <FormatNumbers value={income} />
        </td>
      </tr>
      <tr>
        <td className="border px-10 py-2">Taxes</td>
        <td className="border px-10 py-2">-</td>
        <td className="border px-10 py-2">-</td>
        <td className="border px-10 py-2">-</td>
        <td className="border px-10 py-2">
          <FormatNumbers value={annualTax} />
        </td>
      </tr>
    </Fragment>
  );
};
