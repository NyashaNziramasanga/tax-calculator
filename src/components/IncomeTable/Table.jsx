import React from 'react';
import { TableRow } from './TableRow';

export const Table = () => {
  return (
    <table className="table-auto mx-auto">
      <thead>
        <tr>
          <th className="px-4 py-2"></th>
          <th className="px-4 py-2">Weekly</th>
          <th className="px-4 py-2">Fortnightly</th>
          <th className="px-4 py-2">Monthly</th>
          <th className="px-4 py-2">Annually</th>
        </tr>
      </thead>
      <tbody>
        <TableRow></TableRow>
      </tbody>
    </table>
  );
};
