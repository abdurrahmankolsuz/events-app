import React from "react";
import PropTypes, { func } from "prop-types";

import "./_button.scss";
import {  MyModal } from "../../components";

const Button = (props) => {
  const { color, content, onClick ,show,setIsOpen} = props;


  return (
    <>
      <button onClick={onClick} type="button" className={`btn ${color ? "btn-success" : "btn-secondary"
        } m-1`}>{content}</button>
      <MyModal show={show} setIsOpen={setIsOpen} />
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
