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
      return <div>Hey from Second</div>;
    }
  }