import React, { useContext, useState, useEffect, useRef } from "react";

import { AuthContext } from "../context/authContext";
import { SocketService as socket } from '../services/socket.service'

import Layout from "../components/global/Layout";

import styles from './chat.module.scss';

const Chat = () => {

  const { user } = useContext(AuthContext);

  const chatBody = useRef();

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const submitMessage = (e) => {
      e.preventDefault();

      if(message && message.length > 0) {

        socket.emit('chat message', {
            user,
            message
        });

      }
  }

  useEffect(() => {
    
    socket.on('chat message', (message) => {
        setMessages((messages) => [...messages, message]);
        chatBody.current.scrollTo(0, document.body.scrollHeight);
    });

    return () => {
        socket.disconnect();
    }
  }, []);


  return (
    <Layout location="notifications" grid="">
      <h1>Chat</h1>

      <div className={styles.dh__chat_container}>
        <div ref={chatBody} className={`${styles.messages}`}>

            {
                messages.length == 0 && <div> No messages </div>
            }

            {
                messages.map((msg, index) => (
                    <div key={'msg_'+index} className={`${styles.message} ${msg.user._id === user._id ? styles.__me : ""}`}>
                        <div className={styles.content}>
                            {msg.message}
                        </div>
                        <div className={styles.owner}>
                            <img src={msg.user.avatar} alt={msg.user.first_name}/>
                            <span>{msg.user.first_name}</span>
                        </div>
                    </div>
                ))
            }


        </div>

        <form onSubmit={submitMessage} className={`${styles.form}`}>
            <input className="form-control" onChange={e => setMessage(e.target.value)} type="text"/>
            <button className="btn btn-primary" type="submit">Send</button>
        </form>

      </div>
    </Layout>
  );
};

export default Chat;
