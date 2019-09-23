let pwd = require('./pwd');
let fs = require('./ls');

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd') {
    pwd();
  } else if (cmd === 'ls') {
    fs();
  } else {
    process.stdout.write('You typed: ' + cmd);
  }
  process.stdout.write('\nprompt > ');
});
