import React from "react";

import { EventList } from "./event-list";
import { EventDetail } from "./event-detail";
import "./_home.scss";
import example_response from './response.js'; 

const Home = () => {
  console.log(example_response.data);
  console.log(JSON.stringify(example_response.data));
  return (
    <div className="home-container container-fluid px-0">
      <div className="row home-container__sub-container">
        <div className="col-8">
          <div className="px-4">
            <strong>EVENTS</strong>
          </div>
          <EventList data={example_response.data}/>
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
