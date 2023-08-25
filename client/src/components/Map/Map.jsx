import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';


const Map = () => {
  return (
    <MapContainer>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
        <GeoCoderMarker address={`${address} ${city} ${country}`} />
    </MapContainer>
  )
}

export default Map
