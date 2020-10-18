import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

import { Button, Card } from "../../components";
import "./_home.scss";

const EventDetail = (props) => {
  const { detail } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  const [isActionRequired, setIsActionRequired] = React.useState(true);
  const showModal = () => {
    setIsOpen(true);
  };
  const setActionRequired = () => {
    setIsActionRequired(false);
  };


  return (
    <>
      <Card>
        {isActionRequired &&
          <div className="d-flex flex-row">
            <Button onClick={setActionRequired} color={false} content={"NO ACTION NEEDED"} ></Button>
            <Button onClick={showModal} color={true} content={"TAKE ACTION"} show={isOpen} setIsOpen={setIsOpen}></Button>
          </div>
        }
        <Tabs>
          <TabList>
            <Tab>DETAILS</Tab>
            <Tab>LOCATION</Tab>
            <Tab>MEDIA</Tab>
          </TabList>
          <TabPanel>
            <div className="d-flex align-items-center justify-content-between px-2">
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
            <h2>{detail.details[detail.details.length - 1].value}</h2>
          </TabPanel>
          <TabPanel>
            <LeafletMap id="map-container"
              center={[50, 10]}
              zoom={6}
              maxZoom={10}
              attributionControl={true}
              zoomControl={true}
              doubleClickZoom={true}
              scrollWheelZoom={true}
              dragging={true}
              animate={true}
              easeLinearity={0.35}>
              <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
              <Marker position={[detail.location.latitude, detail.location.longitude]}>
                <Popup>Popup for any custom information.</Popup>
              </Marker>
            </LeafletMap>
          </TabPanel>
          <TabPanel>
            <img src="https://picsum.photos/200/300"></img>
          </TabPanel>
        </Tabs>
      </Card>
    </>
  );
};

export { EventDetail };
