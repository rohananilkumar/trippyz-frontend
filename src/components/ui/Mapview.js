import React from "react";
import {
  GoogleMap,
  LoadScript,
  Polyline,
  useJsApiLoader,
} from "@react-google-maps/api";
const containerStyle = {
  position:"relative",
  width: "165%",
  height: "660px",
  top:140,
  left:-263
};

const center = { lat: 21.291, lng: -157.821 };

function Mapview({ coordinates }) {
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
      center={coordinates[0]}
      zoom={100}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      <Polyline
        path={coordinates}
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

export default Mapview;
