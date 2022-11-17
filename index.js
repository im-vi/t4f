const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.get('/ogladaj', function(req, res) {
    res.sendFile(__dirname + '/ogladaj.html')
})

app.listen('4000', function() {
    console.log('Server is running!')
})