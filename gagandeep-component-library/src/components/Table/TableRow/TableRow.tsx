import React from 'react';
import styled, { css } from 'styled-components';

interface TableRowProps {
  cells: string[];
  backgroundColor?: string;
  fontSize?: string;
  disabled?: boolean;
}

interface StyledTableRowProps {
  backgroundColor?: string;
  disabled?: boolean;
}

const StyledTableRow = styled.tr<StyledTableRowProps>`
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;

const TableCell = styled.td<{ fontSize?: string }>`
  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize};
    `}
`;

const TableRow: React.FC<TableRowProps> = ({
  cells,
  backgroundColor,
  fontSize,
  disabled,
}) => {
  return (
    <StyledTableRow
      backgroundColor={backgroundColor}
      disabled={disabled}
    >
      {cells.map((cell, index) => (
        <TableCell key={index} fontSize={fontSize}>
          {cell}
        </TableCell>
      ))}
    </StyledTableRow>
  );
};

export default TableRow;
