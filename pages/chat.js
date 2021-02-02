import React, { useContext, useState, useEffect, useRef } from "react";

import { AuthContext } from "../context/authContext";
import { SocketService as socket } from '../services/socket.service'

import ChatMessage from '../components/chat/ChatMessage'
import withAuth from '../components/withAuth'
import Layout from "../components/global/Layout";

import styles from './chat.module.scss';
const CHAT_USERS_EVENT = "chatUsers";
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

const Chat = () => {

  const { user } = useContext(AuthContext);

  const chatBody = useRef();

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [sessionId, setSessionId] = useState(null);
  const [sessions, setSessions] = useState([]);

  const isConnected = () => {
    const is = sessions.includes(id => id === sessionId)
    console.log('sessions', sessions)
    console.log('isConnected', is)
    return is;
  }

  const submitMessage = (e) => {
      e.preventDefault();

      if(message && message.length > 0) {

        socket.emit(NEW_CHAT_MESSAGE_EVENT, {
            user,
            message
        });

        setMessage("");

      }
  }

  useEffect(() => {
    
    socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
      console.log('NEW_CHAT_MESSAGE_EVENT', data)
        setMessages(() => [...data]);
        chatBody.current.scrollTo(0, document.body.scrollHeight);
    });

    socket.on(CHAT_USERS_EVENT, (data) => {
      console.log('CHAT_USERS_EVENT', data)
      setSessions(() => [...data]);
      console.log('Nueva conexión', sessions, sessions.length);
    });

    socket.on('connect', function() {
      socket.emit(CHAT_USERS_EVENT, socket.id);
      socket.emit(NEW_CHAT_MESSAGE_EVENT);
      setSessionId(socket.id);
    });

    return () => {
      setSessionId(null);
      socket.disconnect();

    }
  }, []);


  return (
    <Layout location="notifications" grid="">
      <h1>Chat</h1>
      <p>Usuarios conectados: {sessions.length}</p>
      <p>SessionID: {sessionId} {isConnected ? 'Conectado' : 'Desconectado'}</p>

      <div className={styles.dh__chat_container}>
        <div ref={chatBody} className={`${styles.messages}`}>

            {
                messages.length == 0 && <div> No messages </div>
            }

            {
                messages.map((msg, index) => <ChatMessage key={'msg_'+index} msg={msg} userId={user._id} isConnected={isConnected}/>)
            }

        </div>

        <form onSubmit={submitMessage} className={`${styles.form}`}>
            <input className="form-control" onChange={e => setMessage(e.target.value)} value={message} type="text"/>
            <button className="btn btn-primary" type="submit">Send</button>
        </form>

      </div>
    </Layout>
  );
};

export default withAuth(Chat);