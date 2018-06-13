const memberservicekeys = require("./memberservicekeys");

memberservicekeys.getBampiKey().then(function(result) {
  console.log(result);
});
