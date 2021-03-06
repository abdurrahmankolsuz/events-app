import React from "react";

import { EventList } from "./event-list";
import { EventDetail } from "./event-detail";
import "./_home.scss";
import example_response from '../../data/response.js';

const Home = () => {
  example_response.data.forEach(function (element, index) {
      element.isSelected = false;
  });
  const [dataList, setDataList] = React.useState(example_response.data)
  const [detail, setDetail] = React.useState(example_response.data[0])

  const setDetailPage = (key) => {
    setDetail(example_response.data[key]);
    const newList = example_response.data.map((item, index) => {
      if (index === key) {
        const updatedItem = {
          ...item,
          isSelected: !item.isSelected,
        };
        return updatedItem;
      }
      return item;
    });
    setDataList(newList);
  };

  const setNoActionNeeded = () => {
    const newList = dataList.map((item) => {
      if (item.isSelected) {
        item.details = item.details.map((elem) => {
          if (elem.title === "Aksiyon") {
            elem.value = "Aksiyon Gerekmiyor";
          }
          return elem;
        });
      }
      return item;
    });
    setDataList(newList);
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
            <EventDetail setNoActionNeeded={setNoActionNeeded} detail={detail} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
