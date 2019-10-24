const fs = require('fs');

module.exports = function(name) {
  fs.readFile(`./${name}`, 'utf8', function(err, data) {
    if (err) {
      throw err;
    } else {
      console.log(data);
    }
  });
};
