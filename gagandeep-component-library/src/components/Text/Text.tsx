import React from 'react';
import styled, { css } from 'styled-components';

interface TextProps {
  text: string;
  enabled?: boolean;
  fontSize?: string;
  backgroundColor?: string;
}

const StyledText = styled.span<TextProps>`
  /* Default styles */
  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${fontSize};
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

const Text: React.FC<TextProps> = ({
  text,
  enabled = true,
  fontSize,
  backgroundColor,
}) => {
  return (
    <StyledText enabled={enabled} fontSize={fontSize} backgroundColor={backgroundColor}>
      {text}
    </StyledText>
  );
};

export default Text;
