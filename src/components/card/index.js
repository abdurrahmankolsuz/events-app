import React from "react";
import PropTypes from "prop-types";

import "./_card.scss";

const Card = (props) => {
  const { insideStep, isSelected, onClick, showEdge, hasWarning } = props;

  return (
    <div onClick={onClick}
      className={`card shadow position-relative card-container ${hasWarning ? "has-warning" : ""
        } ${insideStep ? "inside-step" : ""
        } ${isSelected ? "selected" : ""
      }`}>
      {showEdge && (
        <div className="card-container__yellow-edge bg-warning"></div>
      )}
      <div className="px-3 py-2">{props.children}</div>
    </div>
  );
};


Card.propTypes = {
  showEdge: PropTypes.bool,
  hasWarning: PropTypes.bool,
  insideStep: PropTypes.bool,
};

Card.defaultProps = {
  showEdge: false,
  hasWarning: false,
  insideStep: false,
};



export { Card };
