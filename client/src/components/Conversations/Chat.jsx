import React, { useState } from "react";
import "./Chat.css";

import { MdOutlineModeComment } from "react-icons/md";
import { Link } from "react-router-dom";

const Chat = () => {
  return (
    <div className="chat">
      <div>
        <Link to="../home">
          <MdOutlineModeComment style={{ height: "50px", width: "50px" }} />
        </Link>
      </div>
    </div>
  );
};

export default Chat;
