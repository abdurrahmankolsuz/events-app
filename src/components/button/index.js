import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  const { color, content } = props;

  return (
  <button type="button" class={`btn ${
    color ? "btn-primary" : "btn-secondary"
  }`}>{content}</button>
 )
};

Button.propTypes = {
  color: PropTypes.bool,
  content: PropTypes.string,
};

Button.defaultProps = {
  color: false,
  content: "TAKE ACTION",
};

export { Button };
