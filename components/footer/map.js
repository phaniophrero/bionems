import { useState, useEffect, useCallback } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { BiMap } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";

const containerStyleResp = {
  width: "30vw",
  height: "30rem",
  borderRadius: "15px",
};

const containerStyle = {
  width: "35vw",
  height: "30rem",
  borderRadius: "15px",
};

const position = {
  lat: 47.872987687479025,
  lng: -3.5534868739615795,
};

const Map = () => {
  const [width, setWidth] = useState("");
  //   const [map, setMap] = useState(null);
  const breakpointFirst = 1360;

  //   const { isLoaded } = useJsApiLoader({
  //     id: "google-map-script",
  //     googleMapsApiKey: process.env.key,
  //   });

  //   const onLoad = useCallback(function callback(map) {
  //     const bounds = new window.google.maps.LatLngBounds();
  //     map.fitBounds(bounds);
  //     setMap(map);
  //   }, []);

  //   const onUnmount = useCallback(function callback(map) {
  //     setMap(null);
  //   }, []);

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="map__wrapper">
      <div className="map__address">
        <span className="map__address--icon-wrapper">
          <BiMap />
        </span>
        <h3 className="map__address--text">
          52 Rue de Pont Aven{" "}
          <span className="map__address--text-right">29300, QUIMPERLE</span>
        </h3>
      </div>
      <LoadScript googleMapsApiKey={process.env.MAP_API_KEY}>
        {/* {isLoaded ? ( */}
        <GoogleMap
          mapContainerStyle={
            width < breakpointFirst ? containerStyleResp : containerStyle
          }
          //   onLoad={onLoad}
          center={position}
          zoom={18}
          //   onUnmount={onUnmount}
        >
          <Marker position={position} />
        </GoogleMap>
        {/* ) : (
          ""
        )} */}
      </LoadScript>
    </div>
  );
};

export default Map;