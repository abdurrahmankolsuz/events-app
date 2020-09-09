import React from "react";

import { Card } from "../../components";
import "./_home.scss";

const Home = () => {
  return (
    <div className="home-container container-fluid px-0">
      <div className="row home-container__sub-container">
        <div className="col-8">
          <div className="px-4">
            <strong>EVENTS</strong>
          </div>
          <div className="pt-1">
            <Card />
          </div>
          <div className="pt-1">
            <Card />
          </div>
          <div className="pt-1">
            <Card />
          </div>
          <div className="pt-1">
            <Card />
          </div>
          <div className="pt-1">
            <Card />
          </div>
          <div className="pt-1">
            <Card />
          </div>
          <div className="pt-1">
            <Card />
          </div>
          <div className="pt-1">
            <Card />
          </div>
        </div>
        <div className="col-4">
          <div className="px-4">
            <strong>EVENT DETAILS</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
