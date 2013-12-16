/**
 * Make iodocs more module friendly by enabling config injection
 * */
var fs = require('fs'),
  path = require('path');

module.exports = function (config) {
  if (!config) {
    console.error('Please provide a configuration object!');
    process.exit(-1);
  }
  fs.writeFile(path.join(__dirname, 'config.json'), JSON.stringify(config), function (err) {
    if (err) throw err;
    return require('./app.js');
  });
}