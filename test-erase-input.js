import { exec } from 'child_process';
const child = exec('xx-chat');
child.stdout.on('data', d => console.log('OUT:', JSON.stringify(d)));
child.stderr.on('data', d => console.log('ERR:', JSON.stringify(d)));
setTimeout(() => {
  child.stdin.write('\r'); // Select server
}, 500);
setTimeout(() => {
  child.stdin.write('Host\r'); // Type nickname
}, 1000);
setTimeout(() => {
  child.stdin.write('hello test erase\r'); // Chat message
}, 2000);
setTimeout(() => {
  child.kill();
}, 3000);
