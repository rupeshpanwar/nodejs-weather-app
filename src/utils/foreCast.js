const request = require('request')
const foreCast = (latitude,longitude , callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=4f5e885a4071828c48a731595e29398a&query=' + latitude + ',' + longitude + "'"
    //05.83611,21.03667' 
    request({url, json: true},(error,{ body }) =>{

        if(error){
            callback('unable to connect to net', undefined)

        }else if( body.error){
            callback('unable to find the location, try once more',undefined)
        }else{
          //  const data = JSON.parse(response.body)
            callback(undefined,{
                'Temperatur': body.current.temperature,
                'FeelsLike': body.current.feelslike,
                'humidity': body.current.humidity
            })
        }
    })

}

module.exports = foreCast
