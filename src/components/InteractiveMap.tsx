// Third Party Imports
import React, { useEffect } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

// Local Imports
import styles from "../css/InteractiveMap.module.css";

const InteractiveMap = () => {
  const containerStyle = {
    width: "700px",
    height: "450px",
  };

  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "",
  });

  const [map, setMap] = React.useState<GoogleMap | null>(null);

  console.log(JSON.stringify(process.env));
  console.log(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>
    </GoogleMap>
  ) : (
    <></>
  );
};

export default InteractiveMap;
