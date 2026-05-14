# Tasks
- [x] Task 1: 初始化项目和依赖
  - [x] SubTask 1.1: 执行 `yarn init -y`，配置 `package.json` 中的 `type: "module"` 以使用 ES Modules。
  - [x] SubTask 1.2: 安装必要的依赖包：`commander`, `inquirer`, `socket.io`, `socket.io-client`, `chalk`。
- [x] Task 2: 实现 CLI 参数解析与交互
  - [x] SubTask 2.1: 使用 `commander` 解析 `--role`, `--ip`, `--nickname` 参数。
  - [x] SubTask 2.2: 使用 `inquirer` 处理未提供的必填参数。
- [x] Task 3: 实现 Server 端核心逻辑
  - [x] SubTask 3.1: 使用 `socket.io` 创建服务端，监听指定端口（如 3000）。
  - [x] SubTask 3.2: 实现客户端连接、断开事件监听，以及广播系统消息（如：xxx 加入了聊天室）。
  - [x] SubTask 3.3: 实现接收客户端聊天消息并广播给所有人的逻辑。
- [x] Task 4: 实现 Client 端核心逻辑
  - [x] SubTask 4.1: 使用 `socket.io-client` 连接到服务端 IP。
  - [x] SubTask 4.2: 监听服务端广播的聊天消息和系统消息。
- [x] Task 5: 实现命令行 UI
  - [x] SubTask 5.1: 使用 Node.js 的 `readline` 模块处理用户输入，确保接收新消息时使用清除当前行的方法，不打断当前正在输入的内容。
  - [x] SubTask 5.2: 使用 `chalk` 对消息进行颜色格式化（系统消息黄色、自己发送的消息绿色、他人发送的消息蓝色）。
- [x] Task 6: 联调与入口集成
  - [x] SubTask 6.1: 编写主入口文件 `index.js`，根据配置的角色启动 Server 或 Client。

# Task Dependencies
- Task 2 depends on Task 1
- Task 3 depends on Task 2
- Task 4 depends on Task 3
- Task 5 depends on Task 3 and Task 4
- Task 6 depends on Task 5
