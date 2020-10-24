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
    this.setSelected = this.setSelected.bind(this);
  }

  setSelected(key) {
/*     let new_arr = this.state.arr;
    new_arr[key] = { ...new_arr[key], isSelected: !new_arr[key].isSelected }; */

    const new_arr = this.state.arr.map((item, index) => {
      if (index === key) {
        const updatedItem = {
          ...item,
          isSelected: !item.isSelected,
        };
        return updatedItem;
      }
      return item;
    });


    this.setState({ arr: new_arr })
  }
  render() {
    return <>
      {this.state.arr.map((item, index) =>
        <Card insideStep={true} isSelected={item.isSelected} onClick={() => this.setSelected(index)} >
          <div className="d-flex align-items-center justify-content-between px-2 py-2">
            <div className="d-flex flex-column">
              <strong>{item.title}</strong>
              <span>{item.body}</span>
            </div>
          </div>
        </Card>
      )}
    </>
  }
}