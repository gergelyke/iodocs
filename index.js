/**
 * Make iodocs more module friendly by enabling config injection
 * */

module.exports = function (config) {
  if (!config) {
    console.error('Please provide a configuration object!');
    process.exit(-1);
  }
  fs.writeFile('config.json', JSON.stringify(config), function (err) {
    if (err) throw err;
    return require('./app.js');
  });
}