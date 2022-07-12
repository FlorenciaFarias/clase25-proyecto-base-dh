const {validationResult} = require('express-validator')
const {index,create,write} = require('../model/users.model');
const usersController = {

  register: function(req, res){
    return res.render('users/register',{
      styles:['forms']
    });
  },
  process: function(req, res){
    let validaciones = validationResult(req)
    let {errors} = validaciones
    if(errors && errors.length > 0){
      return res.render('users/register',{
        styles:['forms'],
        oldData: req.body,
        errors: validaciones.mapped()
      });
    }

    req.body.image = req.files[0].filename;
    let newUser = create(req.body)
    let users = index();
    users.push(newUser)
    write(users)
    return res.redirect('/users/login?msg="El registro fue exitos"')
  },

  login: function(req,res){
    return res.render('users/login',{
      styles:['forms']
    });
  },
  access: function(req,res){
    let validaciones = validationResult(req)
    let {errors} = validaciones
    if(errors && errors.length > 0){
      return res.render('users/login',{
        styles:['forms'],
        oldData: req.body,
        errors: validaciones.mapped()
      });
    }
    return res.send('Ingresando...')
  }
}
  module.exports = usersController;