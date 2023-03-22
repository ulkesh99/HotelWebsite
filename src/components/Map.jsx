import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function Map() {
    const position = [19.20970684086274, 72.7885903734282];
  return (
    <div>
      <MapContainer  center={position} zoom={16} style={{ width: '99vw', height: '60vh'}} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
      Manori Village, Vai Lakanni Mata Nagar, Malad West, Mumbai - 400095 (Opp Kharadala Talao) <br />
      </Popup>
    </Marker>
  </MapContainer>
    </div>
  )
}

export default Map
