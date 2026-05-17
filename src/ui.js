import readline from 'readline';
import chalk from 'chalk';

let rl;
let sendColor = 'green';
let recvColor = 'cyan';
const validColors = ['red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white', 'gray'];

function isValidHexColor(color) {
  return /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/i.test(color);
}

export function setSendColor(color) {
  if (validColors.includes(color) || isValidHexColor(color)) {
    sendColor = color;
    return true;
  }
  return false;
}

export function setRecvColor(color) {
  if (validColors.includes(color) || isValidHexColor(color)) {
    recvColor = color;
    return true;
  }
  return false;
}

function completer(line) {
  const completions = ['/nickname', '/quit', '/help', '/color-send', '/color-recv'];
  const hits = completions.filter((c) => c.startsWith(line));
  return [hits.length ? hits : line.startsWith('/') ? completions : [], line];
}

export function initUI(onMessage) {
  process.stdin.removeAllListeners('keypress');
  if (process.stdin.isTTY) {
    process.stdin.setRawMode(true);
  }
  process.stdin.resume();

  rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> ',
    completer,
    terminal: true
  });

  rl.prompt();

  rl.on('line', (line) => {
    // 擦除用户按下回车后留在屏幕上的原始输入内容
    process.stdout.write('\x1B[1A\x1B[2K\x1B[0G');

    const text = line.trim();
    if (text) {
      onMessage(text);
    } else {
      rl.prompt();
    }
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
  const time = new Date().toLocaleTimeString();
  if (isSelf) {
    const colorFn = isValidHexColor(sendColor) ? chalk.hex(sendColor) : (chalk[sendColor] || chalk.green);
    console.log(colorFn(`[我(${nickname})] ${message} `) + chalk.gray(`[${time}]`));
  } else {
    const colorFn = isValidHexColor(recvColor) ? chalk.hex(recvColor) : (chalk[recvColor] || chalk.cyan);
    console.log(colorFn(`[${nickname}] ${message} `) + chalk.gray(`[${time}]`));
  }
  if (rl) rl.prompt(true);
}
