import React from "react";
import PropTypes from "prop-types";

import "./_button.scss";
import { MyModal } from "../../components";

import loading from "../../styles/icons/loading.svg";
import failed from "../../styles/icons/failed.svg";
import success from "../../styles/icons/success.svg";
/* import x from "../../styles/icons/x.svg"; */

const Button = (props) => {
  const { color, content, onClick, show, setIsOpen } = props;
  const types = {
    SUCCESS: success,
    FAILED: failed,
    LOADING: loading
  }

  return (
    <>
      <button onClick={onClick} type="button" className={`btn ${color ? "btn-success" : "btn-secondary"
        } m-1`}>{content}</button>
      <MyModal icon={types.FAILED} header={"A PROBLEM OCCURED"} content={"We cannot continue due to a problem. Please try again later."} color={false} show={show} setIsOpen={setIsOpen} />
    </>
  )
};

Button.propTypes = {
  color: PropTypes.bool,
  content: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: false,
  content: "",
};

export { Button };
