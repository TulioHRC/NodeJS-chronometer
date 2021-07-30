module.exports = function(app){
    app.get('/chronometer', (req, res) => {
        res.render('chrono')
    })
}