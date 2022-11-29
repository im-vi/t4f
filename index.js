const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.get('/ogladaj', function(req, res) {
    res.sendFile(__dirname + '/ogladaj.html')
})

app.get('/turnieje', function(req, res) {
    res.sendFile(__dirname + '/turnieje.html')
})

app.get('/o-nas', function(req, res) {
    res.sendFile(__dirname + '/o-nas.html')
})

app.listen('4000', function() {
    console.log('Server is running!')
})