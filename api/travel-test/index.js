const fetch = require('node-fetch');

console.log("Loaded review package")

const geolocation = require ('google-geolocation') ({
    key: 'AIzaSyC_nEmhoZpJGym0Tz2e-oapv7L-Ts7S5eI'
  });
   
  const params = {};

  const get_climate = function(city_name, callback){
      var climate="";
    fetch('http://api.openweathermap.org/data/2.5/weather?q='+city_name+'&appid=3def0d6122b3fce761d5c17a4c73af0a').then(response=> response.json()).then(data=> {
      console.log("Temprature- "+data.main.temp+"\n");
      console.log("feels_like- "+data.main.feels_like+"\n");
      console.log("temp_min- "+data.main.temp_min+"\n");
      console.log("temp_min- "+data.main.temp_min+"\n");
      console.log("temp_max- "+data.main.temp_max+"\n");
      console.log("pressure- "+data.main.pressure+"\n");
      console.log("humidity- "+data.main.humidity+"\n");
    //climate+=data.result.reviews[0].text;
  })
  return climate;
}

  const get_places = (data, callback)=> {
    fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location='+data.location.lat+','+data.location.lng+'&radius=500000&key=AIzaSyC_nEmhoZpJGym0Tz2e-oapv7L-Ts7S5eI')
    .then(response=> response.json()).
    then(data=> { 
     // console.log("Name:"+data.results[0].name+"\n");  
      data.results.forEach(function(result) {
       console.log(result.name+"\n");
      });    
        //console.log("Name:"+data.results[19].name+"\n");
        //console.log("Weather:"+get_climate(data.results[19].name)+"\n");
    }
  )
}
 const get_info = geolocation (params, (err, data) => {
    if (err) {
      console.log (err);
      return;
    }
   
    get_places(data);
  })
 
exports.get_info = get_info;