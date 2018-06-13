const request = require('request');
const cheerio = require('cheerio');

// http://was1t7:12000/PassCode/BAMPIPassCode/passcode.htm

var getBampiKey = function getBampiKey() {
  return new Promise((resolve, reject) => {
    request('http://was1t7:12000/PassCode/BAMPIPassCode/passcode.htm', (error, response, body) => {
      // now parse that body and get the BAMPI key
      const $ = cheerio.load(body);

      const text = $('b').first().parent().text();
      const pc = text.indexOf('PassCode');
      const beg = text.indexOf('[', pc) + 1;
      const end = text.indexOf(']', pc);
      const code = text.substring(beg, end).replace("\n", "").replace("\r", "");
      resolve(code);
    });
  });
}

module.exports = {
  getBampiKey: getBampiKey
};
