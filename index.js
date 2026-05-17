#!/usr/bin/env node
import { parseCli } from './src/cli.js';
import { startServer } from './src/server.js';
import { startClient } from './src/client.js';
import { initUI, renderSystemMessage, renderChatMessage, setSendColor, setRecvColor } from './src/ui.js';

async function main() {
  const { role, ip, nickname, port } = await parseCli();

  let socket;

  if (role === 'server') {
    renderSystemMessage('正在启动服务器...');
    startServer(port);
    renderSystemMessage(`服务器已启动，监听端口 ${port}`);
    // 服务端自己也作为一个客户端连接上去
    socket = startClient('127.0.0.1', nickname, port);
  } else if (role === 'client') {
    renderSystemMessage(`正在连接到服务器 ${ip}:${port}...`);
    socket = startClient(ip, nickname, port);
  }

  let currentNickname = nickname;

  initUI((message) => {
    if (message.startsWith('/')) {
      const parts = message.split(' ');
      const command = parts[0];

      if (command === '/' || command === '/help') {
        renderSystemMessage('可用命令：\n  /nickname <新昵称> - 修改昵称\n  /color-send <颜色> - 修改发送消息颜色\n  /color-recv <颜色> - 修改接收消息颜色\n  /quit - 退出聊天\n支持的颜色: red, green, yellow, blue, magenta, cyan, white, gray, 或者十六进制颜色(如 #ff0000)');
      } else if (command === '/nickname') {
        const newNickname = parts.slice(1).join(' ').trim();
        if (newNickname) {
          socket.emit('change_nickname', newNickname);
          currentNickname = newNickname;
          renderSystemMessage(`你的昵称已修改为 ${newNickname}`);
        } else {
          renderSystemMessage('用法: /nickname <新昵称>');
        }
      } else if (command === '/color-send') {
        const color = parts[1];
        if (color && setSendColor(color)) {
          renderSystemMessage(`发送消息颜色已修改为 ${color}`);
        } else {
          renderSystemMessage('用法: /color-send <颜色> (如: green, red, cyan, 或十六进制如 #ff0000)');
        }
      } else if (command === '/color-recv') {
        const color = parts[1];
        if (color && setRecvColor(color)) {
          renderSystemMessage(`接收消息颜色已修改为 ${color}`);
        } else {
          renderSystemMessage('用法: /color-recv <颜色> (如: green, red, cyan, 或十六进制如 #ff0000)');
        }
      } else if (command === '/quit') {
        renderSystemMessage('正在退出聊天...');
        process.exit(0);
      } else {
        renderSystemMessage('未知命令，输入 / 查看可用命令');
      }
      return;
    }

    // UI 层显示自己发的消息
    renderChatMessage(currentNickname, message, true);
    // 通过 socket 发送出去
    socket.emit('chat_message', { nickname: currentNickname, message });
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
