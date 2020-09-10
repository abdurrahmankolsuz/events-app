import React from "react";

import { EventList } from "./event-list";
import { EventDetail } from "./event-detail";
import "./_home.scss";

const Home = () => {
  return (
    <div className="home-container container-fluid px-0">
      <div className="row home-container__sub-container">
        <div className="col-8">
          <div className="px-4">
            <strong>EVENTS</strong>
          </div>
          <EventList />
        </div>
        <div className="col-4">
          <div className="px-1">
            <strong>EVENT DETAILS</strong>
          </div>
          <div className="px-1 pt-1">
            <EventDetail />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
