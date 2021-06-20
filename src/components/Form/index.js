import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { defaultTheme, typeScale } from "../../utils";

export const Label = styled.label`
  display: block;
  font-size: ${typeScale.header4};
  color: ${defaultTheme.textFieldLabel};
  ${(props) =>
    props.error &&
    css`
      color: ${defaultTheme.textFieldErrorLabel};
    `};
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  font-size: ${typeScale.header4};
  color: ${defaultTheme.textFieldInput};
  background-color: ${defaultTheme.textFieldBackground};
  border: none;
  padding: 12px;
  ${(props) =>
    props.error &&
    css`
      color: ${defaultTheme.textFieldErrorInput};
    `};
`;

export const HelperText = styled.small`
  font-size: ${typeScale.helperText};
  margin: 8px 0;
  color: ${defaultTheme.textFieldLabel};
  ${(props) =>
    props.error &&
    css`
      color: ${defaultTheme.textFieldErrorLabel};
    `};
`;

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  error: PropTypes.bool,
};

Label.defaultProps = {
  htmlFor: "",
  error: false,
};

Input.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

Input.defaultProps = {
  disabled: false,
  type: "text",
};

HelperText.propTypes = {
  children: PropTypes.string.isRequired,
  error: PropTypes.bool,
};

HelperText.defaultProps = {
  error: false,
};

export const InputGroup = styled.div`
  padding: 8px;
  margin: 8px 0;
`;

export const Form = styled.form`
  padding: 12px;
`;
