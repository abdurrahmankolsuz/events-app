import React from "react";
import ReactWizard from "./ReactWizard";
import { Container, Row, Col } from "reactstrap";
import FirstStep from "./first-step"
import SecondStep from "./second-step"

class Wizard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
             steps : [
                // this step hasn't got a isValidated() function, so it will be considered to be true
                { stepName: "SELECT ACTION", component: FirstStep },
                // this step will be validated to false
                { stepName: "TAKE ACTION", component: SecondStep }
              ]
              
        };
      }

    finishButtonClick(allStates) {
      console.log(allStates);
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

  export{Wizard}