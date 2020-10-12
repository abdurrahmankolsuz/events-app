import React from "react";
import { Card } from "../../components";
import "./_wizard.scss";
export default class FirstStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstStep: "first step here"
    };
  }
  render() {
    return <>
      <Card insideStep={true}>
        <div className="d-flex align-items-center justify-content-between px-2 py-2">
          <div className="d-flex flex-column">
            <strong>Mark As Resolved</strong>
            <span>Mark this event as resolved and enter the details of solution.</span>
          </div>
        </div>
      </Card>

      <Card insideStep={true}>
        <div className="d-flex align-items-center justify-content-between px-2 py-2">
          <div className="d-flex flex-column">
            <strong>Change Asset</strong>
            <span>Change the asset with another one.</span>
          </div>
        </div>
      </Card>
    </>
  }
}