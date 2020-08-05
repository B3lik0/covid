const puppeteer = require("puppeteer");
const fetch = require("node-fetch");
module.exports = {
  async casos(url) {
    try {
      const res = await fetch(
        "https://api.apify.com/v2/key-value-stores/vpfkeiYLXPIDIea2T/records/LATEST?disableRedirect=true"
      );
      const data = await res.json();
      //const newDta = this.convertir(data.State);
      return data;
    } catch (err) {
      console.log(err);
    }
  },
  
};
