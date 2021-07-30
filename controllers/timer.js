module.exports = function(app){
    app.get('/timer', (req, res) => {
        res.render('timer')
    })
}