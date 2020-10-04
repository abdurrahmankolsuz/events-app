import React from "react";
import PropTypes from "prop-types";

import "./_button.scss";

const Button = (props) => {
  const { color, content } = props;

  return (
  <button type="button" class={`btn ${
    color ? "btn-success" : "btn-secondary"
  } m-1`}>{content}</button>
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
