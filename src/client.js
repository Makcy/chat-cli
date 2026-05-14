import { io } from 'socket.io-client';
import { renderSystemMessage, renderChatMessage } from './ui.js';

export function startClient(ip, nickname) {
  const socket = io(`http://${ip}:3000`);

  socket.on('connect', () => {
    socket.emit('join', nickname);
    renderSystemMessage('成功连接到聊天服务器！');
  });

  socket.on('system_message', (msg) => {
    renderSystemMessage(msg);
  });

  socket.on('chat_message', (data) => {
    renderChatMessage(data.nickname, data.message, false);
  });

  socket.on('disconnect', () => {
    renderSystemMessage('与服务器断开连接。');
  });

  socket.on('connect_error', (err) => {
    renderSystemMessage(`连接错误: ${err.message}`);
  });

  return socket;
}
