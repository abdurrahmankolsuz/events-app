import React from "react";
export default class SecondStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  isValidated() {
    // do some validations
    // decide if you will
    return true;
    // or you will
    // return false;
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return <>
      <div className="d-flex align-items-center justify-content-between px-2 py-2">
        <div className="d-flex flex-column">
          <strong>Mark As Resolved</strong>
          <span>Mark this event as resolved and enter the details of solution.</span>
        </div>
      </div>
      <div className="form-group px-2">
        <label className="text-area">Resolution Detail*</label>
        <textarea value={this.state.value} onChange={this.handleChange} placeholder="Enter resolution detail..." className="form-control" ></textarea>
      </div>
    </>
  }
}