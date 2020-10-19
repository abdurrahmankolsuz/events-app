import React from "react";
import { Card } from "../../components";
import "./_wizard.scss";
export default class FirstStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        {
          title: "Mark As Resolved",
          body: "Mark this event as resolved and enter the details of solution.",
          isSelected: false
        }, {
          title: "Change Asset",
          body: "Change the asset with another one.",
          isSelected: false
        }
      ]
    };
    this.setFunc = this.setFunc.bind(this);
  }

 setFunc(key){
    console.log("aaa  ")
    let new_arr = this.state.arr;
    new_arr[key] = { ...new_arr[key], isSelected: !new_arr[key].isSelected };


    this.setState({ arr: new_arr })
  }
  render() {
    return <>
      <Card insideStep={true} isSelected={this.state.arr[0].isSelected} onClick={() => this.setFunc(0)} >
        <div className="d-flex align-items-center justify-content-between px-2 py-2">
          <div className="d-flex flex-column">
            <strong>{this.state.arr[0].title}</strong>
            <span>{this.state.arr[0].body}</span>
          </div>
        </div>
      </Card>

      <Card insideStep={true} isSelected={this.state.arr[1].isSelected} onClick={() => this.setFunc(1)}>
        <div className="d-flex align-items-center justify-content-between px-2 py-2">
          <div className="d-flex flex-column">
            <strong>{this.state.arr[1].title}</strong>
            <span>{this.state.arr[1].body}</span>
          </div>
        </div>
      </Card>
    </>
  }
}