import readline from 'readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});
rl.prompt();
rl.on('line', (line) => {
  // Move up one line and clear it
  process.stdout.write('\x1B[1A\x1B[2K\x1B[0G');
  console.log(`[ME] ${line}`);
  rl.prompt();
});
