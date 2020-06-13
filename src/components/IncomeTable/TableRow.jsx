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
        <td class='w-2/3 text-left py-3 px-4'>Taxable Income</td>
        <td class='w-2/3 text-left py-3 px-4'>
          <FormatNumbers value={income} />
        </td>
      </tr>
      <tr>
        <td class='w-2/3 text-left py-3 px-4'>Taxes</td>
        <td class='w-2/3 text-left py-3 px-4'>
          <FormatNumbers value={annualTax} />
        </td>
      </tr>
      <tr>
        <td class='w-2/3 text-left py-3 px-4'>Take Home Pay</td>
        <td class='w-2/3 text-left py-3 px-4'>
          <FormatNumbers value={pay} />
        </td>
      </tr>
    </Fragment>
  );
};
