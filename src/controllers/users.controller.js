function login(req, res){
    res.render('users/login', {title: 'Login'});
}

function register(req, res){
    res.render('users/register', {title: 'Register'});
    
}

function changePassword(req, res){
    res.render('users/change-password');
}

function forgetPassword(req, res){
    res.render('users/forget-password');

}

function userLogout(req, res){
    req.session.user = null;
    res.redirect('/login');
}

module.exports = {
    login,
    register,
    forgetPassword
}