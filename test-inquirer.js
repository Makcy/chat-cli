import inquirer from 'inquirer';
import readline from 'readline';

async function run() {
  await inquirer.prompt([{ type: 'input', name: 'test', message: 'test' }]);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
  });
  rl.prompt();
  rl.on('line', (line) => {
    console.log('You entered:', line);
    rl.prompt();
  });
}
run();
