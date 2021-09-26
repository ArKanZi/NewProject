function home(req, res){
    res.render('dashboard', {title: 'Dashboard'});
}

function about(req, res){
    res.render('dashboard', {title: 'About Page'});
}

module.exports = {
    home, 
    about
}