import React from "react";
import { Card } from "../../components";
import "./_wizard.scss";

import string from '../../res/strings';

export default class FirstStep extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [
        {
          id: 1,
          title: string.wizard.step.first.heading,
          body: string.wizard.step.first.text,
          isSelected: true
        }, {
          id: 2,
          title: string.wizard.step.second.heading,
          body: string.wizard.step.second.text,
          isSelected: false
        }
      ]
    };
    this.setSelected = this.setSelected.bind(this);
  }

  setSelected(key) {
    const new_arr = this.state.arr.map((item, index) => {
      if (index === key) {
        const updatedItem = {
          ...item,
          isSelected: !item.isSelected,
        };
        return updatedItem;
      } else {
        const updatedItem = {
          ...item,
          isSelected: false,
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
        <Card key={item.id} insideStep={true} isSelected={item.isSelected} onClick={() => this.setSelected(index)} >
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