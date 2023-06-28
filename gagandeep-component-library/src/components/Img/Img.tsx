import React from 'react';
import styled, { css } from 'styled-components';

interface ImgProps {
  imageUrl: string;
  altText: string;
  enabled?: boolean;
  width?: string;
  height?: string;
  border?: string;
  rotation?: string;
}

const Image = styled.img<ImgProps>`
  /* Default styles */
  ${({ width, height }) =>
    css`
      width: ${width};
      height: ${height};
    `}

  /* Border */
  ${({ border }) =>
    border &&
    css`
      border: ${border};
    `}

  /* Rotation */
  ${({ rotation }) =>
    rotation &&
    css`
      transform: rotate(${rotation});
    `}

  /* Disabled state */
  ${({ enabled }) =>
    !enabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

const Img: React.FC<ImgProps> = ({
  imageUrl,
  altText,
  enabled = true,
  width,
  height,
  border,
  rotation,
}) => {
  return (
    <Image
      src={imageUrl}
      alt={altText}
      enabled={enabled}
      width={width}
      height={height}
      border={border}
      rotation={rotation}
    />
  );
};

export default Img;
