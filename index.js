const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public'))


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.get('/ogladaj', function(req, res) {
    res.redirect('https://www.twitch.tv/turnieje4fun')
})

app.get('/turnieje', function(req, res) {
    res.sendFile(__dirname + '/turnieje.html')
})

app.get('/discord', function(req, res) {
    res.redirect('https://discord.com/invite/7euhpCpYDu')
})

app.get('/test2023', function(req, res) {
    res.redirect('https://play.toornament.com/pl/tournaments/6223744430341644288/')
})

app.listen('4000', function() {
    console.log('Server is running!')
})
