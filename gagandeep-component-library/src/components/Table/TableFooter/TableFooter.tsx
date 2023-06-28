import React from 'react';
import styled, { css } from 'styled-components';

interface TableFooterProps {
  text: string;
  fontSize?: string;
  fontColor?: string;
  backgroundColor?: string;
  disabled?: boolean;
  numColumns: number; // Add the `numColumns` property to hold the number of columns
}

const StyledTable = styled.table`
  width: 100%;
  border: 1px solid #ccc;
`;

const StyledTableFooter = styled.tfoot<TableFooterProps>`
  background-color: #f2f2f2;

  ${props =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize};
    `}

  ${props =>
    props.fontColor &&
    css`
      color: ${props.fontColor};
    `}

  ${props =>
    props.backgroundColor &&
    css`
      background-color: ${props.backgroundColor};
    `}

  ${props =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;

const TableFooter: React.FC<TableFooterProps> = ({
  text,
  fontSize,
  fontColor,
  backgroundColor,
  disabled,
  numColumns // Add `numColumns` to the destructured props
}) => {
  return (
    <StyledTable>
      <StyledTableFooter
        fontSize={fontSize}
        fontColor={fontColor}
        backgroundColor={backgroundColor}
        disabled={disabled}
      >
        <tr>
          <td colSpan={numColumns}>{text}</td> {/* Use `numColumns` as the value for colSpan */}
        </tr>
      </StyledTableFooter>
    </StyledTable>
  );
};

export default TableFooter;
