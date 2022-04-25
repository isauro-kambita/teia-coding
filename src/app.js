const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3020

//defining paths
const publicDirectory = path.join(__dirname, '../public')
const viewsDirectory = path.join(__dirname, '../templates/views')
const partialsDirectory = path.join(__dirname, '../templates/partials')

//setting handlebars
app.set('view engine', 'hbs')
app.set('views', viewsDirectory)
hbs.registerPartials(partialsDirectory)


//setting up the public directory
app.use(express.static(publicDirectory))

app.get('', (req, res)=>{
    res.render('index', {
        title: 'climApp',
        developer: 'Esaú A. Kambita'
    })
})

app.get('/about', (req, res)=>{
    res.render('about', {
        title: 'About us page',
        available: 'false'
    })
})

app.get('/clientes', (req, res)=>{
    res.render('clients', {
        title: 'Client page',
        available: 'false'
    })
})

app.get('/registo', (req, res)=>{
    res.render('cadastro', {
        info: 'Resgisto de cliente',
        available: 'true'
    })
})


app.get('/login', (req, res)=>{
    res.render('login', {
        info: 'Login page',
        available: 'False'
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
