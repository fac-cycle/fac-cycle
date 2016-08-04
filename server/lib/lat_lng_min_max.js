function latLngMinMax(inputLatitude, inputLongitude, distanceKm) {
  const latRange = (1 / 110.574) * (distanceKm / 2);
  const lngRange = (distanceKm / 2) / (111.32 * Math.cos(inputLatitude * (Math.PI / 180)));
  return {
    maxLatitude: inputLatitude + latRange,
    minLatitude: inputLatitude - latRange,
    maxlongitude: inputLongitude + lngRange,
    minlongitude: inputLongitude - lngRange,
  };
}

module.exports = latLngMinMax;
