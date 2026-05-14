# LAN CLI Chat Tool Spec

## Why
用户需要一个能在局域网内进行简单通信的命令行聊天工具，通过简单的配置即可快速搭建聊天室并进行实时交流。

## What Changes
- 初始化 Node.js 项目并使用 `yarn` 作为包管理工具。
- 实现 CLI 参数解析，支持配置角色（server/client）、服务器 IP 和昵称。
- 实现 Server 端逻辑：管理客户端连接、广播消息、处理用户断开连接。
- 实现 Client 端逻辑：连接服务器、发送消息、接收并展示广播消息。
- 实现命令行 UI：使用颜色区分不同用户的消息，确保输入和接收消息时界面不混乱。

## Impact
- Affected specs: 局域网聊天核心能力、命令行交互 UI。
- Affected code: 全新项目，涉及核心的 CLI、Server、Client 及 UI 模块。

## ADDED Requirements
### Requirement: 启动配置
系统应允许用户通过命令行参数或交互式提示输入：角色（server 或 client）、服务器 IP（客户端需要）、昵称。

#### Scenario: 作为服务端启动
- **WHEN** 用户执行命令指定 role 为 server，并输入昵称
- **THEN** 系统启动 WebSocket 服务端监听默认端口，并作为第一个用户加入聊天室。

#### Scenario: 作为客户端启动
- **WHEN** 用户执行命令指定 role 为 client，输入服务端 IP 和昵称
- **THEN** 系统连接到指定 IP 的服务端，加入聊天室并收到欢迎消息。

### Requirement: 实时聊天
系统应提供唯一的聊天室，所有连接的用户都能实时看到他人发送的消息。

#### Scenario: 接收和发送消息
- **WHEN** 用户在输入框输入消息并回车
- **THEN** 消息通过服务端广播给所有在线用户，其他用户的界面实时展示该消息。
