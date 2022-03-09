const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { contentType } = require('express/lib/response')

const app = express()
const port = process.env.PORT || 3000

//defining paths
const publicDirectory = path.join(__dirname, '../public')
const viewsDirectory = path.join(__dirname, '../templates/views')
const partialsDirectory = path.join(__dirname, '../templates/partials')

//setting handlebars
app.set('view engine', 'hbs')
app.set('views', viewsDirectory)
hbs.registerPartials(partialsDirectory)

//setting paths
app.use(express.static(publicDirectory))

app.get('', (req, res)=>{
    res.render('index', {
        title: 'Weather App',
        developer: 'Esaú A. Kambita'
    })
})

app.get('/products', (req, res)=>{
    res.render('products', {
        title: 'Products page',
        developer: 'Esaú A. Kambita'
    })
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About page',
        developer: 'Esaú A. Kambita'
    })
})

app.get('/help', (req, res)=>{
    res.render('help', {
        title: 'Help page',
        developer: 'Esaú A. Kambita'
    })
})

app.get('/demo', (req, res)=>{
    res.send({
        developer: 'Esaú Kambita',
        profession: 'CTO',
        searching: req.query.search
    })
})

app.get('*', (req, res)=>{
    res.render('404', {
        error: '404'
    })
})


app.listen(port, ()=>{
    console.log('The app running on port '+ port)
})
