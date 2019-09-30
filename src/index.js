console.log('test is this running');

const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker')

mapboxgl.accessToken = 'pk.eyJ1Ijoidmd1ZXJyZXJvNDIiLCJhIjoiY2sxNmxiNzh4MDRoaDNsa3c5NWl5aDJjZiJ9.ebBPWxImwMVMcPXW21atXA';


const map = new mapboxgl.Map({
  container: "map",
  center: [-87.641, 41.895], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});

const marker = buildMarker()
marker.addTo(map)