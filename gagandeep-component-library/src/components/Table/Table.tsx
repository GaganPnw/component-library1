import React from 'react';
import styled from 'styled-components';

interface TableProps {
  data: any[];
  columns: string[];
  fontSize?: string;
  fontColor?: string;
  disabled?: boolean;
  backgroundColor?: string;
}

const StyledTable = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;

  th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;

    ${props =>
      props.fontSize &&
      `
      font-size: ${props.fontSize};
    `}

    ${props =>
      props.fontColor &&
      `
      color: ${props.fontColor};
    `}

    ${props =>
      props.disabled &&
      `
      cursor: not-allowed;
      opacity: 0.5;
    `}

    ${props =>
      props.backgroundColor &&
      `
      background-color: ${props.backgroundColor};
    `}
  }
`;

const Table: React.FC<TableProps> = ({
  data,
  columns,
  fontSize,
  fontColor,
  disabled,
  backgroundColor,
}) => {
  return (
    <StyledTable
      fontSize={fontSize}
      fontColor={fontColor}
      disabled={disabled}
      backgroundColor={backgroundColor}
    >
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, columnIndex) => (
              <td key={columnIndex}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
