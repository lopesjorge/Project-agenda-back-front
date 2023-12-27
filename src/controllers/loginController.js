const Login = require('../models/LoginModel')

exports.index= (req, res, next) =>{
 res.render('login')
}

exports.register = async (req, res, next) =>{
try {
    const login = new Login(req.body)
    await login.register()

    if(login.errors.length > 0){
            req.flash('errors',login.errors)
            req.session.save(function(){
            return res.redirect('index')
        })
        return
    }
    
    req.flash('sucess','Seu usuário foi criado com sucesso!')
        req.session.save(function(){
        return res.redirect('index')
    })
} 
catch (e){
    console.log(e);
    return res.render('404')
    }
}