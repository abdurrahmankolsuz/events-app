import React from "react";
import PropTypes from "prop-types";

import success from "../../styles/icons/success.svg";
import loading from "../../styles/icons/loading.svg";
import failed from "../../styles/icons/failed.svg";
import x from "../../styles/icons/x.svg";

import "./_result.scss";

const ResultCard = (props) => {
  const { icon, color, header, content } = props;

  return (
    <div className="card text-center">
      <div className="card-header">
        <button type="button" className="close py-3" aria-label="Close">
          <span aria-hidden="true">
            <object data={x} type="image/svg+xml" width="12" height="12"></object>
          </span>
        </button>
      </div>
      <div className="card-body">
        <object data={success} type="image/svg+xml" width="56" height="56"></object>
        <h5 className="card-title p-2 my-2 success">{header}</h5>
        <p className="card-text p2">{content}</p>

      </div>
    </div>
  )
};

ResultCard.propTypes = {
  color: PropTypes.bool,
  content: PropTypes.string,
  header: PropTypes.string,
  icon: PropTypes.string,
};

ResultCard.defaultProps = {
  color: false,
  content: "You can see the action details from details tab.",
  header: "ACTION HAS BEEN TAKEN",
  icon: "",
};

export { ResultCard };
