import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Map as LeafletMap, TileLayer, Marker, Popup } from "react-leaflet";
import Moment from 'react-moment';
import L from 'leaflet';
import { Button, Card } from "../../components";
import "./_home.scss";
import 'leaflet/dist/leaflet.css';

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

delete L.Icon.Default.prototype._getIconUrl;

const EventDetail = (props) => {
  const { detail, setNoActionNeeded } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <Card>
        {!(detail.details.find(function (elem) {
          return elem.title === 'Aksiyon';
        }).value === "Aksiyon Gerekmiyor") &&
          <div className="d-flex flex-row">
            <Button onClick={setNoActionNeeded} color={false} content={"NO ACTION NEEDED"} ></Button>
            <Button onClick={setIsOpen} color={true} content={"TAKE ACTION"} show={isOpen} setIsOpen={setIsOpen}></Button>
          </div>
        }
        <Tabs>
          <TabList>
            <Tab>DETAILS</Tab>
            <Tab>LOCATION</Tab>
            <Tab>MEDIA</Tab>
          </TabList>
          <TabPanel>
            <div className="d-flex flex-wrap align-items-center justify-content-between px-2">
              {detail.details.map((item, index) =>
                <div key={index} className="d-flex flex-column w-50 py-3">
                  <strong>{item.title}</strong>
                  {item.format === "date" ? <Moment date={item.value} format="YYYY/MM/DD hh:mm:ss" /> : <span>{item.value}</span>}
                </div>
              )}
            </div>
          </TabPanel>
          <TabPanel>
            <LeafletMap id="map-container"
              center={[detail.location.latitude, detail.location.longitude]}
              zoom={14}
              maxZoom={15}
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
            <img className="img" src="https://picsum.photos/200/300"></img>
          </TabPanel>
        </Tabs>
      </Card>
    </>
  );
};

export { EventDetail };
