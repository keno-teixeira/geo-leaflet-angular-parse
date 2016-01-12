app.service('GeoJsonReport', function(){
  var resultsR = ""
  this.geoJson = function() {

    var query = new Parse.Query('Report')
    //query.equalTo('username', 'keno') // query "="
    //query.containedIn('username', ['keno','The Lord of the Rings 01']) // query "IN"
    //query.matches('username','.*The*.') // query like
    query.include('owner') // inclui chamado para joins
    
    query.find({
      success: function(results) {
        var jsonGeo = "{\"type\":\"FeatureCollection\",\"features\":[" 
        // cycle through the results
        var id = 0
        for ( x in results ) {
          var name = results[x].attributes.owner != null ? results[x].get('owner').get('username') : "sem usuario"
          var urlPhoto = results[x].attributes.picture != null ? results[x].get("picture").url() : "#"
          var lat = results[x].attributes.location != null ? results[x].get("location").latitude : "-15.781"+(id+4)+"5"
          var lon = results[x].attributes.location != null ? results[x].get("location").longitude : "-47.615"+id+"45"

          id > 0 ? jsonGeo += ",{" : jsonGeo += "{"
          jsonGeo += "\"geometry\":{\"type\":\"Point\",\"coordinates\":["+lon+","+lat+"]"
          jsonGeo += "},\"id\":"+id+",\"type\":\"Feature\",\"properties\":{"
          jsonGeo += "\"nome\":\""+name
          jsonGeo += "\",\"img\":\""+urlPhoto
          jsonGeo += "\",\"lon-lon\":\""+lon+","+lat
          jsonGeo += "\",\"Titulo\":\""+results[x].attributes.title+"\"}}"
          id++

        }
        jsonGeo += "]}"

        resultsR = jsonGeo
        //console.log(jsonGeo)
        //return resultsR
      },
      error: function(myObject, error) {
        // Error occured
        //console.log( error )
        resultsR = error
        //return resultsR
      }
    })
    window.setTimeout(function() {
      console.log(resultsR)
      return resultsR
    }, 2000)
  }
  
})

