import React from "react";
import ReactWizard from "./react-wizard";
import { Container } from "reactstrap";
import FirstStep from "./first-step"
import SecondStep from "./second-step"

import success from "../../styles/icons/success.svg";
import loading from "../../styles/icons/loading.svg";
import failed from "../../styles/icons/failed.svg";


import string from "../../res/strings";

class Wizard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      steps: [
        // this step hasn't got a isValidated() function, so it will be considered to be true
        { stepName: string.action.select.text, component: FirstStep },
        // this step will be validated to false
        { stepName: string.action.take.text, component: SecondStep }
      ]

    };

  }

  finishButtonClick = (allStates) => {
    setTimeout(() => {
      alert("test")
    }, 2000);
    if (Object.entries(allStates)[1][1].value !== "") {
      this.props.setModal({ hasWizard: false, icon: success, header: string.modal.success.heading, content: string.modal.success.text, color: true });
    } else {
      this.props.setModal({ hasWizard: false, icon: failed, header: string.modal.fail.heading, content: string.modal.fail.text, color: false });
    }
  }
  render() {
    return (
      <Container fluid>
        <ReactWizard
          steps={this.state.steps}
          title=""
          description=""
          validate
          color="primary"
          finishButtonClick={this.finishButtonClick}
        />
      </Container>
    );
  }
}

export { Wizard }