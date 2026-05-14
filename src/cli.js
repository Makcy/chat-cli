import { program } from 'commander';
import inquirer from 'inquirer';

export async function parseCli() {
  program
    .option('-r, --role <type>', 'Role: server or client')
    .option('-i, --ip <ip>', 'Server IP to connect to (if client)')
    .option('-n, --nickname <name>', 'Your nickname');

  program.parse(process.argv);
  const options = program.opts();

  const questions = [];

  if (!options.role || !['server', 'client'].includes(options.role)) {
    questions.push({
      type: 'list',
      name: 'role',
      message: 'Choose your role:',
      choices: ['server', 'client'],
    });
  }

  if (!options.nickname) {
    questions.push({
      type: 'input',
      name: 'nickname',
      message: 'Enter your nickname:',
      validate: (input) => input.trim() ? true : 'Nickname cannot be empty',
    });
  }

  questions.push({
    type: 'input',
    name: 'ip',
    message: 'Enter server IP:',
    default: '127.0.0.1',
    when: (answers) => {
      const role = answers.role || options.role;
      return role === 'client' && !options.ip;
    },
    validate: (input) => input.trim() ? true : 'IP cannot be empty',
  });

  const answers = await inquirer.prompt(questions);

  return {
    role: answers.role || options.role,
    ip: answers.ip || options.ip,
    nickname: answers.nickname || options.nickname,
  };
}
