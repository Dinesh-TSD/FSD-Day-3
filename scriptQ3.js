//Q3

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){

    var result = JSON.parse(request.response);

    for (var i = 0; i < result.length; i++) {
        var nam = result[i].name.common;
        var regions = result[i].region;
        var subregions = result[i].subregion;
        var pop = result[i].population;
        console.log(nam,regions,subregions,pop);
      }
}
