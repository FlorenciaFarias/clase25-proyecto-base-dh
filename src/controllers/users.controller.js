//No olvidar requerir express-validator//
//const {index,create,write} = require('../models/products.model');
const usersController = {

  register: function(req, res){
    return res.render('users/register',{
      styles:['forms']
    });
  },
 process: function(req, res){

  res.send('Validacion on');
},

  login: function(req,res){
    return res.render('users/login',{
      styles:['forms']
    });
  }
}
  module.exports = usersController;