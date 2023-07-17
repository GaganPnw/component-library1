import React from 'react';

interface TableCellProps {
  content: string;
}

const TableCell: React.FC<TableCellProps> = ({ content }) => {
  return <td>{content}</td>;
};

export default TableCell;
