const express = require('express')
const chronoCont = require(__dirname + '/controllers/chrono')
const PORT = 3000

let app = express()

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('home')
})

chronoCont(app)

app.listen(PORT)
console.log(`The server is now running, access in localhost:${PORT} see you there!!!`)