import React,{useState} from "react";
import { useEffect } from "react";
import styles from "./Mapview.module.scss";
import {
  GoogleMap,
  withGoogleMap,
  Marker,
  LoadScript,
  Polyline,
} from "@react-google-maps/api";

//import { render } from "@testing-library/react";


const containerStyle = {
  width: "35%",
  height: "400px",
};

const center = {
  lat: 11.86078,
  lng: 75.414001,
};
const polyline = [
  {lat: 37.772, lng: -122.214},
  {lat: 21.291, lng: -157.821},
  {lat: -18.142, lng: 178.431},
  {lat: -27.467, lng: 153.027}
  // Add more LatLng objects for the polyline path
];
{/*
const Mapview = ({ className, coordinates}) => {
 
 // console.log(coordinates);
  //if (!coordinates) return "no coordinates";
  return (
    <div className={`${styles.viewmap} ${className}`}>
      <LoadScript googleMapsApiKey="AIzaSyDJAJHPrnnTEADpRrH44q19tXlOzoxWjgA">
        <GoogleMap
          mapContainerStyle={containerStyle}
        center={{
          lat: 11.86078,
          lng: 75.414001,
        }}
          zoom={12}
           // Set the initial center of the map
           onLoad={() => {
            // Draw the polyline here
            <Polyline
            path={polyline}
            options={{
              strokeColor: "#FF0000",
              strokeOpacity: 1.0,
              strokeWeight: 2,
            }}
          />
          }}
        >
          
          <Marker position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};



const Mapview = ({ polyline }) => {
const [map, setMap] = useState(null);

  useEffect(() => {
    if (map) {
      // Draw the polyline on the map
      const polylinePath = new window.google.maps.Polyline({
        path: polyline,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      polylinePath.setMap(map);
    }
  }, [map, polyline]);


  return (
    <div style={{ height: '400px' }}>
      <LoadScript googleMapsApiKey="AIzaSyDJAJHPrnnTEADpRrH44q19tXlOzoxWjgA">
      <GoogleMap
        mapContainerStyle={{ height: '100%' }}
        center={{ lat: 0, lng: 0 }}
        zoom={10}
        onLoad={mapInstance => setMap(mapInstance)}
      >
      </GoogleMap>
      </LoadScript>
    </div>
  );
};


*/}



const Mapview = ({  className, polyline }) => {
 // console.log(coordinates)
  return (

    <div className={`${styles.viewmap} ${className}`}>
      <LoadScript googleMapsApiKey="AIzaSyDJAJHPrnnTEADpRrH44q19tXlOzoxWjgA">
      <GoogleMap
        mapContainerStyle={containerStyle}
        defaultZoom={10}
        defaultCenter={center}
      >
        <Polyline
          path={polyline}
          options={{
            strokeColor: '#FF00E0',
            strokeOpacity: 1.0,
            strokeWeight: 2,
            paths: [
            {lat: 37.772, lng: -122.214},
            {lat: 21.291, lng: -157.821},
            {lat: -18.142, lng: 178.431},
            {lat: -27.467, lng: 153.027}
          ],
          }}
        />
      </GoogleMap>
      </LoadScript>
    </div>
  );
};



export default Mapview;
