import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";

import "./_modal.scss";
import { Wizard } from "../wizard";

const MyModal = (props) => {
  const { hasWizard, closable, icon, color, header, content, show, setIsOpen } = props;
  const modal_header = closable ? <Modal.Header className="header" closeButton /> : <Modal.Header className="header" />;
  const [isWizard, setWizard] = React.useState(props.hasWizard);

  /**back to initial state condition */
  React.useEffect(() => {
    console.log("effect")
    return () => { setWizard(false) }
  }, []);

  return (
    <Modal
      show={show}
      onHide={() => setIsOpen(false)}
      centered
    >
      {modal_header}
      {isWizard ? (
        <Modal.Body className="body">
          <object data={icon} type="image/svg+xml" width="56" height="56"></object>
          <h5 className={`title p-2 my-2 ${color ? "success" : "failed"
            }`}>{header}</h5>
          <p className="content pb-3">{content}</p>
        </Modal.Body>
      ) : <Wizard setWizard={setWizard} />}
      <Modal.Footer className="footer" />
    </Modal>

  )
};

MyModal.propTypes = {
  color: PropTypes.bool,
  content: PropTypes.string,
  header: PropTypes.string,
  icon: PropTypes.string,
  hasWizard: PropTypes.bool,
  closable: PropTypes.bool
};

MyModal.defaultProps = {
  color: false,
  content: "You can see the action details from details tab.",
  header: "ACTION HAS BEEN TAKEN",
  icon: "",
  show: false,
  hasWizard: false,
  closable: true
};

export { MyModal };

