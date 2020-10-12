import React from "react";

import { Card } from "../../components";

const EventList = (props) => {
  
  const listItems = props.data.map((key,data) =>
  <div key={key.id} className="pt-1">
    <Card showEdge={true} hasWarning={true}>
      <div className="d-flex align-items-center justify-content-between px-2">
        <div className="d-flex flex-column">
          <strong>test</strong>
          <span></span>
        </div>
        <div className="d-flex flex-column">
          <strong>Type</strong>
          <span>{key.type}</span>
        </div>
        <div className="d-flex flex-column">
          <strong>Bın ID</strong>
          <span>{key.id}</span>
        </div>
        <div className="d-flex flex-column">
          <strong>test</strong>
          <span>-</span>
        </div>
        <div className="d-flex flex-column">
          <strong>test</strong>
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
