import React from "react";
export default class FirstStep extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        firstStep: "first step here"
      };
    }
    render() {
      return <div>Hey from First</div>;
    }
  }