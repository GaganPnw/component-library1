import React from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  text: string;
  enabled?: boolean;
  size?: 'small' | 'medium' | 'large';
  backgroundColor?: string;
  onClick?: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  /* Default styles */
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  /* Size variations */
  ${({ size }) =>
    size === 'small' &&
    css`
      font-size: 12px;
      padding: 8px 16px;
    `}

  ${({ size }) =>
    size === 'large' &&
    css`
      font-size: 18px;
      padding: 14px 28px;
    `}

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

const Button: React.FC<ButtonProps> = ({
  text,
  enabled = true,
  size = 'medium',
  backgroundColor,
  onClick,
}) => {

  const handleClick = () => {
    if (enabled && onClick) {
      onClick();
    }
  };
  return (
    <StyledButton
      enabled={enabled}
      size={size}
      backgroundColor={backgroundColor}
      onClick={handleClick}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
