import React from "react";
import PropTypes from "prop-types";

import "./_button.scss";

const Button = (props) => {
  const { color, content, onClick } = props;

  return (
    <>
      <button
        onClick={onClick}
        type="button"
        className={`btn ${color ? "btn-success" : "btn-secondary"} m-1`}>
        {content}
      </button>
    </>
  );
};

Button.propTypes = {
  color: PropTypes.bool,
  content: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: false,
  content: "Button",
};

export { Button };
