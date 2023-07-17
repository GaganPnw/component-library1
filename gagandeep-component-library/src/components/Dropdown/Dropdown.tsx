import React, { useState } from 'react';
import styled, { css } from 'styled-components';

interface DropdownProps {
  options: string[];
  defaultOption?: string;
  enabled?: boolean;
  backgroundColor?: string;
  onChange?: (selectedOption: string) => void;
}

const DropdownWrapper = styled.select<DropdownProps>`
  /* Default styles */
  padding: 10px;
  border: none;
  cursor: pointer;

  /* Background color */
  ${({ backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}

  /* Disabled state */
  ${({ enabled }) =>
    !enabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  defaultOption,
  enabled = true,
  backgroundColor,
  onChange,
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption || '');

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    onChange && onChange(selectedValue);
  };

  return (
    <DropdownWrapper
      enabled={enabled}
      backgroundColor={backgroundColor}
      value={selectedOption}
      onChange={handleOptionChange}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </DropdownWrapper>
  );
};

export default Dropdown;
