var express = require('express'),
    router = express.Router(),
    fs = require('fs'),
    chalk = require('chalk');


/* GET the inventory list */
router.get('/list', function(req, res, next) {
  // res.send('respond with a resource');
  let stream = fs.createReadStream(__dirname + '/../data/' + 'inventory.json');
  stream.on('error', err => {
    console.error(chalk.red.bold(err.stack));
    res.end(500);
  });
  stream.pipe(res);

});

module.exports = router;
