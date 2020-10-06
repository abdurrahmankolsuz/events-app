import React from "react";
import ReactWizard from "react-bootstrap-wizard";
import { Container, Row, Col } from "reactstrap";
import FirstStep from "./first-step"
import SecondStep from "./second-step"

class Wizard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
             steps : [
                // this step hasn't got a isValidated() function, so it will be considered to be true
                { stepName: "First", component: FirstStep },
                // this step will be validated to false
                { stepName: "Second", component: SecondStep }
              ]
              
        };
      }

    finishButtonClick(allStates) {
      console.log(allStates);
    }
    render() {
      return (
        <Container fluid style={{ marginTop: "15px" }}>
          <Row>
            <Col xs={12} md={6} className="mr-auto ml-auto">
              <ReactWizard
                steps={this.state.steps}
                title=""
                description=""
                headerTextCenter
                validate
                color="primary"
                finishButtonClick={this.finishButtonClick}
              />
            </Col>
          </Row>
        </Container>
      );
    }
  }

  export{Wizard}