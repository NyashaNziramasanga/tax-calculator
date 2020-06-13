import React from 'react';
import { TableRow } from './TableRow';

export const Table = () => {
  return (
    <div class='md:px-32 py-8 w-full'>
      <div class='shadow overflow-hidden rounded border-b border-gray-200'>
        <table class='min-w-full bg-white'>
          <tbody class='text-gray-700'>
            <TableRow />
          </tbody>
        </table>
      </div>
    </div>
  );
};
