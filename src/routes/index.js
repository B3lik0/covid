const FindController = require('../controllers/FindController')
module.exports = (app) => {
    app.get('/buscar', FindController.buscar);
    //app.get('/otraRuta', cualquierControllador.cualquierFuncion);
  };
  