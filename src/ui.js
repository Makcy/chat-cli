import readline from 'readline';
import chalk from 'chalk';

let rl;

function completer(line) {
  const completions = ['/nickname', '/quit', '/help'];
  const hits = completions.filter((c) => c.startsWith(line));
  return [hits.length ? hits : line.startsWith('/') ? completions : [], line];
}

export function initUI(onMessage) {
  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> ',
    completer
  });

  rl.prompt();

  rl.on('line', (line) => {
    const text = line.trim();
    if (text) {
      onMessage(text);
    }
    rl.prompt();
  });
}

function clearLine() {
  if (rl) {
    process.stdout.write('\x1B[2K\x1B[0G');
  }
}

export function renderSystemMessage(msg) {
  clearLine();
  console.log(chalk.yellow(`[系统] ${msg}`));
  if (rl) rl.prompt(true);
}

export function renderChatMessage(nickname, message, isSelf = false) {
  clearLine();
  if (isSelf) {
    console.log(chalk.green(`[我(${nickname})] ${message}`));
  } else {
    console.log(chalk.blue(`[${nickname}] ${message}`));
  }
  if (rl) rl.prompt(true);
}
