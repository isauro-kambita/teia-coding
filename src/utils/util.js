const request = require('request')

const url = 'http://api.weatherapi.com/v1/current.json?key=2108f3a910474fb89f3191838220203&q=lubango&lang=pt' 

request.get({url, json: true}, (error, response)=>{
    if(error){
        error = {
            error: 'Unable to connect!'
        }
        return error
    }else if(response.body.error){
        console.log('Unable to find location')
    }else if(response.body.length === 0){
        error = {
            error: 'Place not found!'
        }

        return error
    }
    const values = {
        location: response.body.location.name,
        region: response.body.location.region,
        country: response.body.location.country,
        condition: response.body.current.condition.text,
        humidity: response.body.current.humidity,
        updated_on: response.body.current.last_updated
    }

    console.log(values)
})
