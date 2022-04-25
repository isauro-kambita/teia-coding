const request = require('request')

const url = 'http://api.weatherapi.com/v1/current.json?key=2108f3a910474fb89f3191838220203&q='+req.query.place+'&lang=pt' 
//const url = 'http://127.0.0.1:3000/weather'

request.get({url, json: true}, (error, response)=>{
    if(error){
       console.log('Error occured'+error)
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

