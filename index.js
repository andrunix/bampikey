

var request = require('request');
const cheerio = require('cheerio');

// http://was1t7:12000/PassCode/BAMPIPassCode/passcode.htm

request('http://was1t7:12000/PassCode/BAMPIPassCode/passcode.htm', function(error, response, body) {
  // console.log('error: ', error);
  // console.log('statusCode: ', response && response.statusCode);
  // console.log('body: ', body);

  // now parse that body and get the BAMPI key
  const $ = cheerio.load(body);

  var text = $('b').first().parent().text();
  var pc = text.indexOf('PassCode');
  var beg = text.indexOf('[', pc) + 1;
  var end = text.indexOf(']', pc);
  var code = text.substring(beg, end);
  


  console.log(code);
});
