import { exec } from 'child_process';
const child = exec('xx-chat --role server --nickname Host');
child.stdout.on('data', d => console.log('OUT:', JSON.stringify(d)));
child.stderr.on('data', d => console.log('ERR:', JSON.stringify(d)));
setTimeout(() => {
  child.stdin.write('hello\r');
}, 1000);
setTimeout(() => {
  child.kill();
}, 2000);
