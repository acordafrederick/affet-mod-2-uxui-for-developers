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

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  error: PropTypes.bool,
};

Label.defaultProps = {
  htmlFor: "",
  error: false,
};
