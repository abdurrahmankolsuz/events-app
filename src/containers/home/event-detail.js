import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";

import { Button, Card, MyModal } from "../../components";
import "./_home.scss";

const EventDetail = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const showModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Card>
        <div className="d-flex flex-row">
          <Button onClick={showModal} color={false} content={"NO ACTION NEEDED"} show={isOpen} setIsOpen={setIsOpen}></Button>
          <Button onClick={() => {
            setTimeout(() => {
              alert("Another button clicked!");
            }, 1000)
          }}  color={true} content={"TAKE ACTION"}></Button>
        </div>
        <Tabs>
          <TabList>
            <Tab>DETAILS</Tab>
            <Tab>LOCATION</Tab>
            <Tab>MEDIA</Tab>
            <Tab>RESULT</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <div id="map-container">
              <LeafletMap
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
                <Marker position={[50, 10]}>
                  <Popup>Popup for any custom information.</Popup>
                </Marker>
              </LeafletMap>{" "}
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel>
            <MyModal/>
          </TabPanel>
        </Tabs>
      </Card>
    </>
  );
};

export { EventDetail };
