import React from "react";
import "./LeafMap.css";
import { Map, TileLayer } from "react-leaflet";

export default function LeafMap(props) {
  return (
    <div className="map">
      <div className="map_weather">
        <Map
          center={[55.75222, 37.61556]}
          zoom={6}
          maxZoom={10}
          attributionControl={true}
          zoomControl={true}
          doubleClickZoom={true}
          scrollWheelZoom={true}
          dragging={true}
          animate={true}
          easeLinearity={0.35}
          onClick={props.getMapPosition}
        >
          >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
        </Map>
      </div>
    </div>

  );
}
