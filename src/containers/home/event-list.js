import React from "react";

import { Card } from "../../components";

const EventList = (props) => {
  const { setDetail } = props;

  const listItems = props.data.map((data, key) =>
    <div key={data.id} className="pt-1">
      <Card onClick={() => { setDetail(key) }} showEdge={true} hasWarning={data.isSelected}>
        <div className="d-flex align-items-center justify-content-between px-2">
          <div className="d-flex flex-column flex-even">
            <strong>Date</strong>
            <span>{data.details.find(function (elem) {
              return elem.format === 'date';
            }).value}</span>
          </div>
          <div className="d-flex flex-column flex-even">
            <strong>Type</strong>
            <span>{data.details.find(function (elem) {
              return elem.format === 'incident_type';
            }).value}</span>
          </div>
          <div className="d-flex flex-column flex-even">
            <strong>Bin ID</strong>
            <span>{data.id}</span>
          </div>
          <div className="d-flex flex-column flex-even">
            <strong>Distance</strong>
            <span>{data.details.find(function (elem) {
              return elem.format === 'vehicle';
            }).value}</span>
          </div>
          <div className="d-flex flex-column flex-even">
            <strong>Action</strong>
            <span>{data.details.find(function (elem) {
              return elem.title === 'Aksiyon';
            }).value}</span>
          </div>
          <div className="d-flex flex-column ">&nbsp;</div>
        </div>
      </Card>
    </div>
  );
  return (
    listItems
  );

};
export { EventList };
