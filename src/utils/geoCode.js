const request = require('request');
const geoCode = (address,callback) => {

    const url =  'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    address + '.json?access_token=pk.eyJ1IjoicnVwZXNocGFud2FyIiwiYSI6ImNram1qZThjNDVqbDgyc25xcGVrNHJ1djkifQ.v8YbHmbMx0_AXb1XtjmKLg&limit=1'
    
    request({ url , json: true},(error, { body }) =>{
            if(error){
                callback('unable to connect to net',undefined)
            } else if(body.error || body.features.length === 0){
                callback('unable to fiind the location', undefined)
            }
            else{
                callback(undefined,{
                    'latitude': body.features[0].center[0],
                    'longitude': body.features[0].center[1],
                     'location': body.features[0].place_name
                })
            }
    })

}


module.exports = geoCode


