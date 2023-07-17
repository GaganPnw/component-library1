import React from 'react';

interface TableFooterProps {
  footer: string;
}

const TableFooter: React.FC<TableFooterProps> = ({ footer }) => {
  return (
    <tfoot>
      <tr>
        <td colSpan={2}>{footer}</td>
      </tr>
    </tfoot>
  );
};

export default TableFooter;
