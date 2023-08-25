import React from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';

let DefaultIcon = L.icon ({
    iconUrl: icon,
    shadowUrl: iconShadow
})
L.Marker.prototype.options.icon = DefaultIcon
const GeoCoderMarker = ({address}) => {

    // adding the location for the marker in the map
    const map = useMap()
    const [ position, setposition ] = useState([60, 19]) 
  return (
    <Marker position={position} icon={DefaultIcon} >
        <Popup />
    </Marker>
  )
}

export default GeoCoderMarker
