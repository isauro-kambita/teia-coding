const request = require('request')

const url = 'http://api.weatherapi.com/v1/current.json?key=2108f3a910474fb89f3191838220203&q=Lubango&aqi=yes'

request.get(url, (error, data)=>{
    console.log(data)
})