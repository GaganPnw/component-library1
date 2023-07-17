import React, { useState } from "react";
import styled from "styled-components";

interface RadioButtonProps {
  options: string[];
  backgroundColor?: string;
  font?: string;
  enabled?: boolean;
}

const RadioButtonWrapper = styled.div<RadioButtonProps>`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.backgroundColor};
  font-family: ${(props) => props.font};
`;

const RadioButtonOption = styled.label<RadioButtonProps>`
  display: flex;
  align-items: center;
  cursor: ${(props) => (props.enabled ? "pointer" : "not-allowed")};

  &:not(:last-child) {
    margin-bottom: 5px;
  }

  input[type="radio"] {
    margin-right: 10px;
  }
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  options,
  backgroundColor,
  font,
  enabled = true,
}) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    options[0]
  );

  const handleOptionChange = (option: string) => {
    if (enabled) {
      setSelectedOption(option);
    }
  };

  return (
    <RadioButtonWrapper backgroundColor={backgroundColor} font={font}>
      {options.map((option) => (
        <RadioButtonOption
          key={option}
          backgroundColor={backgroundColor}
          font={font}
          enabled={enabled}
        >
          <input
            type="radio"
            name="radioButtonOption"
            checked={selectedOption === option}
            onChange={() => handleOptionChange(option)}
            disabled={!enabled}
          />
          {option}
        </RadioButtonOption>
      ))}
    </RadioButtonWrapper>
  );
};

export default RadioButton;
