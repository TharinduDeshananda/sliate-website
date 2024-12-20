import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

type GoogleMapProps = {
  latitude: number;
  longitude: number;
  instituteName: string;
};

const GoogleMapComponent = ({
  latitude,
  longitude,
  instituteName,
}: GoogleMapProps) => {
  const mapStyles = { height: "400px", width: "100%" };
  const position = { lat: latitude, lng: longitude };

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
    >
      <GoogleMap mapContainerStyle={mapStyles} zoom={15} center={position}>
        <Marker position={position} label={instituteName} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
