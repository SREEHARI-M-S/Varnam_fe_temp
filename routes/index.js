module.exports = function(app) {
    
    app.get('/home', function(req, res) {
        res.render('pages/home');
    });
    
    app.get('/', function (req, res) {
        res.redirect('/home');
    });

    app.get('/events', function(req, res) {
        res.render('pages/events');
    });

    app.get('/scoreboard', function(req, res) {
        res.render('pages/scoreboard');
    });

    app.get('/schedule', function(req, res) {
        res.render('pages/schedule');
    });

    
    
};