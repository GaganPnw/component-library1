import React from 'react';
import styled, { css } from 'styled-components';

interface TableHeaderProps {
  columns: string[];
  backgroundColor?: string;
  fontSize?: string;
  disabled?: boolean;
}

interface StyledTableHeaderProps {
  backgroundColor?: string;
  disabled?: boolean;
}

const StyledTableHeader = styled.thead<StyledTableHeaderProps>`
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

const TableHeaderCell = styled.th<{ fontSize?: string }>`
  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize};
    `}
  padding: 8px;
  border: 1px solid #ccc;
`;

const TableHeader: React.FC<TableHeaderProps> = ({
  columns,
  backgroundColor,
  fontSize,
  disabled,
}) => {
  return (
    <StyledTableHeader backgroundColor={backgroundColor} disabled={disabled}>
      <tr>
        {columns.map((column, index) => (
          <TableHeaderCell key={index} fontSize={fontSize}>
            {column}
          </TableHeaderCell>
        ))}
      </tr>
    </StyledTableHeader>
  );
};

export default TableHeader;
