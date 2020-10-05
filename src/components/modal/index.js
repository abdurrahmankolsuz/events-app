import React from "react";
import PropTypes from "prop-types";

import { Modal } from "react-bootstrap";

import success from "../../styles/icons/success.svg";
import loading from "../../styles/icons/loading.svg";
import failed from "../../styles/icons/failed.svg";
import x from "../../styles/icons/x.svg";

import "./_modal.scss";

const MyModal = (props) => {
  const { icon, color, header, content, show, setIsOpen } = props;

  return (
    <Modal
      show={show}
      onHide={() => setIsOpen(false)}
      centered
    >
      <Modal.Header className="header" closeButton>
      </Modal.Header>
      <Modal.Body className="body">
        <object data={success} type="image/svg+xml" width="56" height="56"></object>
        <h5 className="card-title p-2 my-2 success">{header}</h5>
        <p className="card-text pb-3">{content}</p>
      </Modal.Body>
      <Modal.Footer className="footer"></Modal.Footer>
    </Modal>

  )
};

MyModal.propTypes = {
  color: PropTypes.bool,
  content: PropTypes.string,
  header: PropTypes.string,
  icon: PropTypes.string,
};

MyModal.defaultProps = {
  color: false,
  content: "You can see the action details from details tab.",
  header: "ACTION HAS BEEN TAKEN",
  icon: "",
  show: false,
};

export { MyModal };

