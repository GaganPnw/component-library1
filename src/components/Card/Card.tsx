import React from "react";
import styled, { css } from "styled-components";

interface CardProps {
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  border?: boolean;
  font?: string;
  enabled?: boolean;
}

const CardWrapper = styled.div<CardProps>`
  /* Card styles */
  background-color: ${(props) => props.backgroundColor};
  padding: 20px;
  font-family: ${(props) => props.font};
  border: ${(props) => (props.border ? "1px solid #ccc" : "none")};
  border-radius: 4px;

  /* Size styles */
  ${({ size }) =>
    size === "small" &&
    css`
      width: 200px;
    `}
  ${({ size }) =>
    size === "medium" &&
    css`
      width: 300px;
    `}
  ${({ size }) =>
    size === "large" &&
    css`
      width: 400px;
    `}

  /* Disabled state */
  ${({ enabled }) =>
    !enabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

const Card: React.FC<CardProps> = ({
  backgroundColor,
  size = "medium",
  border = false,
  font,
  enabled = true,
  children,
}) => {
  return (
    <CardWrapper
      backgroundColor={backgroundColor}
      size={size}
      border={border}
      font={font}
      enabled={enabled}
    >
      {children}
    </CardWrapper>
  );
};

export default Card;
