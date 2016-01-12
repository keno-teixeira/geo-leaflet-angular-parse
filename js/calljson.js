app.service('callGeojson', function (GeoJsonReport) {
  this.callGeo = function () {
    //return GeoJsonReport.geoJson()
    var result = GeoJsonReport.geoJson()
    console.log(result)
    return result
    // body...
  }
})
