import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";

import "./_modal.scss";
import { Wizard } from "../wizard";

const MyModal = (props) => {
  const { closable, show, setIsOpen } = props;
  const modal_header = closable ? <Modal.Header className="header" closeButton /> : <Modal.Header className="header" />;
  const [modal, setModal] = React.useState({ hasWizard: props.hasWizard, icon: "", color: true, header: "", content: "" });

  return (
    <Modal
      show={show}
      onHide={() => setIsOpen(false)}
      centered
    >
      {modal_header}
      {!modal.hasWizard ? (
        <Modal.Body className="body">
          <object data={modal.icon} type="image/svg+xml" width="56" height="56"></object>
          <h5 className={`title p-2 my-2 ${modal.color ? "success" : "failed"
            }`}>{modal.header}</h5>
          <p className="content pb-3">{modal.content}</p>
        </Modal.Body>
      ) : <Wizard setModal={setModal} />}
      <Modal.Footer className="footer" />
    </Modal>

  )
};

MyModal.propTypes = {
  hasWizard: PropTypes.bool,
  closable: PropTypes.bool,
  show: PropTypes.bool
};

MyModal.defaultProps = {
  show: false,
  hasWizard: false,
  closable: true
};

export { MyModal };

