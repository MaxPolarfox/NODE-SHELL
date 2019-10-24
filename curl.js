let request = require('request');

module.exports = function(url) {
  request(`${url}`, (err, body) => {
    console.log(body);
  });
};
