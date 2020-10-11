import React from "react";
export default class SecondStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      secondStep: "second step here"
    };
  }
  isValidated() {
    // do some validations
    // decide if you will
    return true;
    // or you will
    // return false;
  }
  render() {
    return <>
      <div className="d-flex align-items-center justify-content-between px-2 py-2">
        <div className="d-flex flex-column">
          <strong>Mark As Resolved</strong>
          <span>Mark this event as resolved and enter the details of solution.</span>
        </div>
      </div>
      <div class="form-group px-2">
        <label className="bold">Resolution Detail*</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" ></textarea>
      </div>
    </>;
  }
}