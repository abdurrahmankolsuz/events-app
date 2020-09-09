import React from "react";
import PropTypes from "prop-types";

import "./_card.scss";

const Card = (props) => {
  const { showEdge, hasWarning } = props;

  return (
    <div
      class={`card position-relative card-container ${
        hasWarning ? "has-warning" : ""
      }`}>
      {showEdge && (
        <div className="card-container__yellow-edge bg-warning"></div>
      )}
      <div class="px-3 py-2">{props.children}</div>
    </div>
  );
};

Card.propTypes = {
  showEdge: PropTypes.bool,
  hasWarning: PropTypes.bool,
};

Card.defaultProps = {
  showEdge: false,
  hasWarning: false,
};

export { Card };
