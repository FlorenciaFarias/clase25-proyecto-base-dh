const mainController = {
    home: function(req,res){
        return res.render('main/home', {
            styles:['styles']
          });
    }
}
module.exports = mainController;