import React from "react";
import styles from "./Mapview.module.scss";
import {
  GoogleMap,
  Marker,
  LoadScript,
  Polyline,
} from "@react-google-maps/api";

const containerStyle = {
  width: "35%",
  height: "250px",
};

const center = {
  lat: 11.86078,
  lng: 75.414001,
};

const Mapview = ({ className, coordinates }) => {
  console.log(coordinates);
  //if (!coordinates) return "no coordinates";
  return (
    <div className={`${styles.viewmap} ${className}`}>
      <LoadScript googleMapsApiKey="AIzaSyDJAJHPrnnTEADpRrH44q19tXlOzoxWjgA">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12} // Set the initial center of the map
        >
          <Polyline
            path={coordinates}
            options={{
              strokeColor: "#FF0000",
              strokeOpacity: 1.0,
              strokeWeight: 2,
            }}
          />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Mapview;
