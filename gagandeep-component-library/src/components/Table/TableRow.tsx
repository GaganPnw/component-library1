import React from 'react';

interface TableRowProps {
  rowData: string[];
}

const TableRow: React.FC<TableRowProps> = ({ rowData }) => {
  return (
    <tr>
      {rowData.map((cell, index) => (
        <td key={index}>{cell}</td>
      ))}
    </tr>
  );
};

export default TableRow;
