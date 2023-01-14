import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Box } from '@mui/material';
import L from 'leaflet';


function puntoIcon() {
  return L.icon({
    iconUrl: require("../../images/gato.png"),
    iconSize: [30, 40],
  });
};


const Mapa = ({paradas}) => {
  return (
    <Box sx={{m: "20px", border:3, borderColor: "#BF40BF"}}>
    <MapContainer  style={{ width: "100%", height: "55vh"}} center={[36.72184282369917,  -4.418403224132213]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
       {paradas.map((parada, idx) => 
          <Marker key={`parada-${idx}`} position={[parada.lat, parada.lon]} icon={puntoIcon()}>
          <Popup>
           Parada  {parada.nombreParada} 
          </Popup>
        </Marker>
        )}
     
    </MapContainer>
  </Box>
)
}

export default Mapa
