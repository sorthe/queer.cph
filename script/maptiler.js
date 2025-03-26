const key = 'LpJwafTLxRvtga3CqNox';
const map = L.map('map').setView([55.684, 12.585], 13);
const mtLayer = L.maptiler.maptilerLayer({
  apiKey: key,
  style: '0195d499-c6cd-7144-a15f-1d48617cb48c', //optional
}).addTo(map);

mtLayer.on("ready", () => {
    // Leverage the MapTiler SDK layer helpers to easily add polyline / point / polygon / heatmap layers
    mtLayer.addPoint({
      data: 'https://api.maptiler.com/data/0195d48d-384a-72e1-825e-1966d588f9a0/features.json?key=LpJwafTLxRvtga3CqNox',
      property: "name",
      pointColor: maptilersdk.ColorRampCollection.PORTLAND.scale(200, 2000).resample("ease-out-sqrt"),
      pointOpacity: 0.8,
      minPointRadius: 6,
      maxPointRadius: 30,
    });

  });