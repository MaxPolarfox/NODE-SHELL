let pwd = require('./pwd');
let fsLs = require('./ls');
let fsCat = require('./cat');
let curl = require('./curl');

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const dataArr = data
    .toString()
    .trim()
    .split(' ');
  const cmd = dataArr[0];

  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    fsLs();
  } else if (cmd === 'cat') {
    fsCat(dataArr[1]);
  } else if (cmd === 'curl') {
    curl(dataArr[1]);
  } else {
    process.stdout.write('You typed: ' + cmd);
  }
  process.stdout.write('\nprompt > ');
});
