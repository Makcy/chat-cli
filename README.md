# xx-chat

English | [中文](#中文)

A simple, lightweight, and real-time LAN CLI chat tool based on Node.js and Socket.io. With `xx-chat`, you can easily set up a chat room on your local network and chat with your friends right in your terminal.

## Features

- **Quick Setup**: Start a server or join as a client with simple commands or interactive prompts.
- **Real-time Messaging**: Instant message broadcasting powered by Socket.io.
- **Clean UI**: Solved terminal input conflicts, providing a modern chat experience in the CLI.
- **Customizable Colors**: Personalize your message colors (supports standard color names and Hex codes like `#ff0000`).
- **Timestamps**: Messages are displayed with clear timestamps.
- **Command Support**: Use `/` to trigger commands like changing nicknames or quitting.

## Installation

You can install it globally via npm or yarn:

```bash
npm install -g xx-chat
# or
yarn global add xx-chat
```

## Usage

### Start as a Server (Host)

Start a chat server on your machine and join the chat room:

```bash
xx-chat --role server --nickname <YourNickname> --port 3000
```
*(The `--port` parameter is optional and defaults to `3000`)*

### Start as a Client (Guest)

Join an existing chat server using its IP address and port:

```bash
xx-chat --role client --ip <Server_IP> --nickname <YourNickname> --port 3000
```

*Tip: If you run `xx-chat` without any arguments, it will launch an interactive prompt to help you configure these settings.*

### Available Commands

In the chat interface, type `/` and press `Enter` to see available commands (Tab completion is supported):

- `/nickname <NewName>` - Change your nickname.
- `/color-send <Color>` - Change the color of the messages you send.
- `/color-recv <Color>` - Change the color of the messages you receive.
- `/quit` - Exit the chat room.

*Supported colors: `red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`, `gray`, or any Hex color code (e.g., `#ff00ff`).*

---

<h2 id="中文">中文</h2>

一个简单、轻量级的局域网命令行（CLI）聊天工具，基于 Node.js 和 Socket.io 开发。使用 `xx-chat`，你可以轻松在局域网内搭建聊天室，并直接在终端里与朋友进行实时聊天。

## 特性

- **快速启动**：通过简单的命令或交互式问答，即可快速作为服务端或客户端启动。
- **实时通信**：基于 Socket.io 的低延迟消息广播。
- **纯净的 UI**：解决了终端输入与接收消息时的冲突问题，带来类似现代聊天软件的体验。
- **自定义颜色**：支持自定义发送和接收消息的颜色（支持标准颜色名及 `#ff0000` 等十六进制颜色值）。
- **时间戳**：每条消息都会清晰地展示发送时间。
- **命令支持**：支持输入 `/` 触发快捷命令，如修改昵称或退出。

## 安装

你可以通过 npm 或 yarn 将其安装到全局：

```bash
npm install -g xx-chat
# 或者
yarn global add xx-chat
```

## 使用方法

### 作为服务端（房主）启动

在你的电脑上启动聊天服务，并作为第一个用户加入：

```bash
xx-chat --role server --nickname <你的昵称> --port 3000
```
*（`--port` 参数是可选的，默认端口为 `3000`）*

### 作为客户端（访客）加入

使用服务端的 IP 地址和端口连接到现有的聊天室：

```bash
xx-chat --role client --ip <服务器的局域网IP> --nickname <你的昵称> --port 3000
```

*提示：如果你直接输入 `xx-chat` 不带任何参数，程序会通过交互式的问答引导你完成这些配置。*

### 聊天室命令

在聊天输入框中，输入 `/` 即可使用以下命令（支持按 `Tab` 键补全）：

- `/nickname <新昵称>` - 修改你的聊天昵称
- `/color-send <颜色>` - 修改你发送消息的显示颜色
- `/color-recv <颜色>` - 修改你接收消息的显示颜色
- `/quit` - 退出聊天室

*支持的颜色：`red`, `green`, `yellow`, `blue`, `magenta`, `cyan`, `white`, `gray`，或者十六进制颜色代码（例如：`#ff00ff`）。*
