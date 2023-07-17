// import React, { MouseEvent } from 'react';
// import styled from 'styled-components';

// interface ButtonProps {
//   buttonText: string;
//   backgroundColor?: string;
//   disabled?: boolean;
//   onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
//   className?: string;
//   id?: string;
//   style?: React.CSSProperties;
//   size?: 'small' | 'medium' | 'large';
// }

// const StyledButton = styled.button<ButtonProps>`
//   background-color: ${props => (props.disabled ? '#ccc' : props.backgroundColor || '#007bff')};
//   color: #fff;
//   padding: ${props => getButtonPadding(props.size)};
//   font-size: ${props => getButtonFontSize(props.size)};
//   border: none;
//   border-radius: 4px;
//   cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};

//   &:hover {
//     background-color: ${props => (props.disabled ? '#ccc' : '#0069d9')};
//   }
// `;

// const getButtonPadding = (size?: 'small' | 'medium' | 'large'): string => {
//   switch (size) {
//     case 'small':
//       return '6px 12px';
//     case 'large':
//       return '12px 24px';
//     case 'medium':
//     default:
//       return '10px 20px';
//   }
// };

// const getButtonFontSize = (size?: 'small' | 'medium' | 'large'): string => {
//   switch (size) {
//     case 'small':
//       return '12px';
//     case 'large':
//       return '16px';
//     case 'medium':
//     default:
//       return '14px';
//   }
// };

// const Button: React.FC<ButtonProps> = ({ buttonText, backgroundColor, disabled, onClick, className, id, style, size }) => {
//   const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
//     if (!disabled && onClick) {
//       onClick(event);
//     }
//   };

//   return (
//     <StyledButton
//       onClick={handleClick}
//       backgroundColor={backgroundColor}
//       disabled={disabled}
//       className={className}
//       id={id}
//       style={style}
//       size={size}
//     >
//       {buttonText}
//     </StyledButton>
//   );
// };

// export default Button;
