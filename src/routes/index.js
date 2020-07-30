const FindController = require('../controllers/FindController')
module.exports = (app) => {
    app.get("/", (req, res) => {
      res.send("hola mundo");
    });
  
    app.get('/buscar', FindController.buscar);
  };
  