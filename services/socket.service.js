import socketIOClient from "socket.io-client";

const ENDPOINT = process.env.NEXT_PUBLIC_SOCKET_API //+ "/";

export const SocketService = socketIOClient(ENDPOINT, {transports: ['polling', 'websocket']});