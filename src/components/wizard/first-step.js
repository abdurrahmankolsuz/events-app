import React from "react";
import { Card } from "../../components";
export default class FirstStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstStep: "first step here"
    };
  }
  render() {
    return <div>
      <Card>
        <div className="d-flex align-items-center justify-content-between px-2 py-2">
          <div className="d-flex flex-column">
            <strong>Mark As Resolved</strong>
            <span>Mark this event as resolved and enter the details of solution.</span>
          </div>
        </div>
      </Card>

      <Card>
        <div className="d-flex align-items-center justify-content-between px-2 py-2">
          <div className="d-flex flex-column">
            <strong>Change Asset</strong>
            <span>Change the asset with another one.</span>
          </div>
        </div>
      </Card>
    </div>
  }
}