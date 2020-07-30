const puppeteer = require("puppeteer");

module.exports = {
  async casos(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    let texts = await page.evaluate(() => {
      let data='';
      let elements = document.getElementsByClassName("tZjT9b");
      for (var i = 0; i < elements.length; i++) {
        var element = elements[i].innerText
        data = element.toString();
      }
       return data;
     });
    browser.close();
    return texts;
  },
};
