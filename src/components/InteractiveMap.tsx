// Third Party Imports
import React, { useEffect, useState } from "react";
import {
  DirectionsRenderer,
  DirectionsService,
  GoogleMap,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";

// Local Imports
import styles from "../css/InteractiveMap.module.css";

type TravelModeType = "WALKING" | "BICYCLING" | "DRIVING";

const InteractiveMap = ({
  latitude,
  longitude,
  selectedMode,
}: {
  latitude: number | null;
  longitude: number | null;
  selectedMode: TravelModeType;
}) => {
  const containerStyle = {
    width: "900px",
    height: "850px",
  };

  const center = {
    lat: latitude !== null ? +latitude : -3.745, // Use props if available, otherwise fallback to default
    lng: longitude !== null ? +longitude : -38.523, // Use props if available, otherwise fallback to default
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "",
  });

  interface Coordinates {
    latitude: number;
    longitude: number;
  }

  const [map, setMap] = React.useState<GoogleMap | null>(null);
  const [userLocation, setUserLocation] = useState<Coordinates | null>(null);
  const [directions, setDirections] =
    useState<google.maps.DirectionsResult | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation(position.coords);
        },
        (error) => {
          console.error("Error getting user's location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const onLoad = React.useCallback(
    function callback(map: any) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      if (!isMapLoaded) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setIsMapLoaded(true);
      }

      setMap(map);
    },
    [center, isMapLoaded]
  );
  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null);
  }, []);

  const onLoadDirections = (
    result: google.maps.DirectionsResult | null,
    status: google.maps.DirectionsStatus
  ) => {
    if (status === google.maps.DirectionsStatus.OK) {
      setDirections(result);
    } else {
      console.error("Error fetching directions:", status);
    }
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}

      {/* Directions Service */}
      {userLocation && (
        <DirectionsService
          options={{
            origin: { lat: userLocation.latitude, lng: userLocation.longitude },
            destination: center,
            travelMode: google.maps.TravelMode[selectedMode],
          }}
          callback={onLoadDirections}
        />
      )}
      {/* Render the directions on the map */}
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  ) : (
    <></>
  );
};

export default InteractiveMap;
