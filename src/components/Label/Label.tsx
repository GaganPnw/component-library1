import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledLabel = styled.label`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => (props.disabled ? "gray" : "black")};
  background-color: ${(props) => props.backgroundColor};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const Label = ({ text, fontSize, disabled, backgroundColor }) => {
  return (
    <StyledLabel
      fontSize={fontSize}
      disabled={disabled}
      backgroundColor={backgroundColor}
    >
      {text}
    </StyledLabel>
  );
};

Label.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
  disabled: PropTypes.bool,
  backgroundColor: PropTypes.string,
};

Label.defaultProps = {
  fontSize: "14px",
  disabled: false,
  backgroundColor: "transparent",
};

export default Label;
