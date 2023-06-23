import React from 'react'
import styles from './Mapview.module.scss'
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '20rem',
  height: '300px',
  top:-60,
  right:8
};

const center = {
  lat: 11.860780,
  lng: 75.414001,
};

const Mapview = ({className}) => {
  return (
    <div  className={`${styles.viewmap} ${className}`}>
    <LoadScript
      googleMapsApiKey="AIzaSyDJAJHPrnnTEADpRrH44q19tXlOzoxWjgA"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Add markers to the map */}
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
    </div>
  );
};

export default Mapview;