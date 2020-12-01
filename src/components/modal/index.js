import React, { useState } from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";

import "./_modal.scss";
import { Wizard } from "../wizard";
import oval from "../../styles/icons/oval.svg";

const MyModal = (props) => {
  const { closable, show, setIsOpen } = props;
  const modal_header = closable ? (
    <Modal.Header className="header" closeButton />
  ) : (
    <Modal.Header className="header" />
  );
  const [modal, setModal] = React.useState({
    icon: "",
    color: true,
    header: "",
    content: "",
    showWizard: true,
    showLoading: false,
  });

  return (
    <Modal
      show={show}
      onHide={() => {
        setIsOpen(false);
        setModal({
          icon: "",
          color: true,
          header: "",
          content: "",
          showWizard: true,
        });
      }}
      centered>
      {modal_header}
      {!modal.showWizard ? (
        <Modal.Body className="body">
          <object
            data={modal.icon}
            type="image/svg+xml"
            width="56"
            height="56"></object>
          <h5 className={`title ${modal.type} p-2 my-2`}>{modal.header}</h5>
          <p className="content pb-3">{modal.content}</p>
        </Modal.Body>
      ) : (
        <Wizard
          setModal={setModal}
          showLoading={() => setModal({ ...modal, showLoading: true })}
        />
      )}
      <Modal.Footer className="footer" />
      {modal.showLoading && (
        <div className="loader-container">
          <object
            data={oval}
            type="image/svg+xml"
            width="40"
            height="40"></object>
        </div>
      )}
    </Modal>
  );
};

MyModal.propTypes = {
  hasWizard: PropTypes.bool,
  closable: PropTypes.bool,
  show: PropTypes.bool,
};

MyModal.defaultProps = {
  show: false,
  hasWizard: false,
  closable: true,
};

export { MyModal };
