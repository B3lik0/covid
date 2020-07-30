const puppeteer = require("puppeteer");
const helpers = require('../helpers/helpers')
const config = require('../config/config')
const url = config.url
if (!url) {
  throw "Please provide URL as a first argument";
}
module.exports = {
    async buscar(req,res){
        const yucatan = await helpers.casos(url)
        res.status(200).send({
          message: yucatan,
        });
        this.otra()
    },
    otra(){
      this.buscar()
    }
};
