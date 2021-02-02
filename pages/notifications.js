import React, { useState, useEffect } from "react";
import { SocketService as socket } from '../services/socket.service'

import Layout from "../components/global/Layout";

const Notifications = () => {
  const [response, setResponse] = useState("");

/*   useEffect(() => {
    socket.on("FromAPI", (data) => {
      setResponse(data);
    });
  }, []); */

  return (
    <Layout location="notifications">
      <h1>Notifications</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
        fugit alias dolores odit omnis consectetur voluptates earum totam esse
        eos. Aut voluptatum tempore alias voluptas modi perspiciatis qui cumque
        assumenda?
      </p>
      <p>
        It's <time dateTime={response}>{response}</time>
      </p>
    </Layout>
  );
};

export default Notifications;
