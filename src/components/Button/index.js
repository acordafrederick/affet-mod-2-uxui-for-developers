import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { defaultTheme, typeScale } from "../../utils";

const StyledButton = styled.button`
  border-radius: 50px;
  display: inline-block;
  min-width: 75px;
  cursor: pointer;
  font-family: ${defaultTheme.buttonFont};
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  padding: 12px 16px;
  font-size: ${typeScale.header5};
`; // there's no colon in the documentation

const ButtonLink = StyledButton.withComponent("a");

export const Button = (props) => {
  return props.href ? (
    <ButtonLink href={props.href} {...props} />
  ) : (
    <StyledButton {...props} />
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
};

Button.defaultProps = {
  href: undefined,
};

export default Button;
