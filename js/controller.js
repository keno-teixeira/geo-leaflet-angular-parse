app.controller('reportgeo', [ '$scope', 'GeoJsonReport', function($scope, GeoJsonReport, ParseObjects){

  // var TestObject = Parse.Object.extend("User");
  // var testObject = new TestObject();
  //   testObject.save({
  //     username: 'The Lord of the Rings 01',
  //     password: '123456',
  //     email: 'Tolkien01@gmail.com'
  //   }, {
  //   success: function(object) {
  //     $(".success").show();
  //   },
  //   error: function(model, error) {
  //     $(".error").show();
  //   }
  // });
  
      $scope.jsonGeoR = GeoJsonReport.geoJson()


  
   console.log($scope.jsonGeoR)

}])