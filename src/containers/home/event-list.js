import React from "react";

import { Card } from "../../components";

const EventList = (props) => {
  const { setDetail } = props;

  const listItems = props.data.map((data, key) =>
    <div key={data.id} className="pt-1">
      <Card onClick={() => { setDetail(key) }} showEdge={true} hasWarning={data.isSelected}>
        <div className="d-flex align-items-center justify-content-between px-2">
          <div className="d-flex flex-column">
            <strong>Date</strong>
            <span></span>
          </div>
          <div className="d-flex flex-column">
            <strong>Type</strong>
            <span>{data.type}</span>
          </div>
          <div className="d-flex flex-column">
            <strong>Bin ID</strong>
            <span>{data.id}</span>
          </div>
          <div className="d-flex flex-column">
            <strong>test</strong>
            <span>-</span>
          </div>
          <div className="d-flex flex-column">
            <strong>Action</strong>
            <span>-</span>
          </div>
          <div className="d-flex flex-column">&nbsp;</div>
        </div>
      </Card>
    </div>
  );
  return (
    listItems
  );

};
export { EventList };
