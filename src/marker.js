const mapbox = require('mapbox-gl')

const iconURLs = {
    hotels: "http://i.imgur.com/D9574Cu.png",
    restaurants: "http://i.imgur.com/cqR6pUI.png",
    activities: "http://i.imgur.com/WbMOfMl.png"
};



function buildMarker(type,coord){
const img = iconURLs[type]
const markerDomEl = document.createElement("div"); 
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = `url(${img})`
new mapbox.Marker(markerDomEl).setLngLat(coord).addTo(map);
}

module.exports = buildMarker