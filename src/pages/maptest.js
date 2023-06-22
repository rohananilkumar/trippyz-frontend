import React from "react";
import styles from "./Routeresult.module.scss";
import DashboardLayout from "../components/layouts/DashboardLayout";
import Sidebar from "../components/ui/Sidebar";
import Title from "../components/ui/Title";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import location from "../assets/Icons/location.svg";
import Mapview from "../components/ui/Mapview";
import {
  GoogleMap,
  LoadScript,
  Polyline,
  useJsApiLoader,
} from "@react-google-maps/api";
const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = { lat: 21.291, lng: -157.821 };

function MapTest() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDJAJHPrnnTEADpRrH44q19tXlOzoxWjgA",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={100}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Polyline
        path={[
          { lat: 37.772, lng: -122.214 },
          { lat: 21.291, lng: -157.821 },
          { lat: -18.142, lng: 178.431 },
          { lat: -27.467, lng: 153.027 },
        ]}
        options={{
          strokeColor: "#FF0000",
          strokeOpacity: 1.0,
          strokeWeight: 2,
        }}
      />
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
}

export default MapTest;
