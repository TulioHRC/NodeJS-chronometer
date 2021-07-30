module.exports = function(app){
    app.get('/alarm', (req, res) => {
        res.render('alarm')
    })
}