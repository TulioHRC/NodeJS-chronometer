const express = require('express')
const alarmCont = require(__dirname + '/controllers/alarm')
const chronoCont = require(__dirname + '/controllers/chrono')
const timerCont = require(__dirname + '/controllers/timer')
const PORT = 3000

let app = express()

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('home')
})

alarmCont(app)
chronoCont(app)
timerCont(app)

app.listen(PORT)
console.log(`The server is now running, access in localhost:${PORT} see you there!!!`)