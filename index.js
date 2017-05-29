var request = require('request');

// http://was1t7:12000/PassCode/BAMPIPassCode/passcode.htm

request('http://was1t7:12000/PassCode/BAMPIPassCode/passcode.htm', function(error, response, body) {
  console.log('error: ', error);
  console.log('statusCode: ', response && response.statusCode);
  console.log('body: ', body);
});
