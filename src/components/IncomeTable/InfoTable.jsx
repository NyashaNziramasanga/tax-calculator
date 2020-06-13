import React from 'react';

export const InfoTable = () => {
  return (
    <div class='md:px-32 py-8 w-full'>
      <div class='shadow overflow-hidden border-b border-gray-200'>
        <table class='min-w-full bg-white'>
          <thead class='bg-blue-600 text-white'>
            <tr>
              <th class='w-1/3 text-center py-3 px-4 uppercase font-semibold text-sm'>
                Income Bracket
              </th>
              <th class='w-1/3 text-center py-3 px-4 uppercase font-semibold text-sm'>
                Tax Rate
              </th>
            </tr>
          </thead>
          <tbody class='text-gray-700'>
            <tr>
              <td class='w-1/3 text-center py-3 px-4'>Below $18,201</td>
              <td class='w-1/3 text-center py-3 px-4'>Tax Exempt</td>
            </tr>
            <tr>
              <td class='w-1/3 text-center py-3 px-4'>$18,201 - $37,001</td>
              <td class='w-1/3 text-center py-3 px-4'>19%</td>
            </tr>
            <tr>
              <td class='w-1/3 text-center py-3 px-4'>$37,001 - $90,000</td>
              <td class='w-1/3 text-center py-3 px-4'>32%</td>
            </tr>
            <tr>
              <td class='w-1/3 text-center py-3 px-4'>$90,000 - $180,000</td>
              <td class='w-1/3 text-center py-3 px-4'>37%</td>
            </tr>
            <tr>
              <td class='w-1/3 text-center py-3 px-4'>Above $180,000</td>
              <td class='w-1/3 text-center py-3 px-4'>45%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
