import { Server } from 'socket.io';

export function startServer(port = 3000) {
  const io = new Server(port);

  io.on('connection', (socket) => {
    let currentNickname = '';

    socket.on('join', (nickname) => {
      currentNickname = nickname;
      socket.broadcast.emit('system_message', `${nickname} 加入了聊天室`);
    });

    socket.on('change_nickname', (newNickname) => {
      const oldNickname = currentNickname;
      currentNickname = newNickname;
      socket.broadcast.emit('system_message', `${oldNickname} 将昵称修改为 ${newNickname}`);
    });

    socket.on('chat_message', (data) => {
      socket.broadcast.emit('chat_message', data);
    });

    socket.on('disconnect', () => {
      if (currentNickname) {
        socket.broadcast.emit('system_message', `${currentNickname} 离开了聊天室`);
      }
    });
  });

  return io;
}
