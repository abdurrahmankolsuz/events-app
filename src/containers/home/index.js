import React from "react";

import { EventList } from "./event-list";
import { EventDetail } from "./event-detail";
import "./_home.scss";
import example_response from '../../data/response.js';

const Home = () => {
  const [dataList, setDataList] = React.useState(example_response.data)
  const [detail, setDetail] = React.useState(example_response.data[0])

  const setDetailPage = (key) => {
    setDetail(example_response.data[key]);
/*     let arr = { ...example_response.data };
    arr[key] = { ...arr[key], isSelected:true };
    setDataList(arr); */
  };

  return (
    <div className="home-container container-fluid px-0">
      <div className="row home-container__sub-container">
        <div className="col-8">
          <div className="px-4">
            <strong>EVENTS</strong>
          </div>
          <EventList data={dataList} setDetail={setDetailPage} />
        </div>
        <div className="col-4">
          <div className="px-1">
            <strong>EVENT DETAILS</strong>
          </div>
          <div className="px-1 pt-1">
            <EventDetail detail={detail} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
