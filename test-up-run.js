import { exec } from 'child_process';
const child = exec('node test-up.js');
child.stdout.on('data', d => console.log('OUT:', JSON.stringify(d)));
setTimeout(() => {
  child.stdin.write('hello\r\n');
}, 500);
setTimeout(() => {
  child.kill();
}, 1000);
