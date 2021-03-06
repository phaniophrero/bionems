import { useState, useEffect, useCallback } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { BiMap } from "react-icons/bi";

const containerStyleResp = {
  maxWidth: "80vw",
  height: "24rem",
  borderRadius: "15px",
};

const containerStyle = {
  maxWidth: "29vw",
  height: "24rem",
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

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="footer-right">
      <div className="map__wrapper">
        <div className="map__address">
          <span className="map__address--icon-wrapper">
            <BiMap />
            <h3 className="map__address--text1">52 Rue de Pont Aven</h3>
          </span>
          <h3 className="map__address--text">
            {/* 52 Rue de Pont Aven{" "} */}
            <span className="map__address--text-right">29300, QUIMPERLE</span>
          </h3>
        </div>
        <LoadScript googleMapsApiKey={process.env.key}>
          <GoogleMap
            mapContainerStyle={
              width > breakpointFirst ? containerStyle : containerStyleResp
            }
            center={position}
            zoom={18}
          >
            <Marker position={position} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default Map;
