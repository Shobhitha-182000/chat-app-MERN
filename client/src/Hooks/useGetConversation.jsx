import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';

const useGetConversation = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversation = async () => {
      setLoading(true);
      try {
        const res = await axios.get("http://localhost:3000/chat/side", {
          withCredentials: true, // Include cookies with the request
        });
        setConversations(res.data);
      } catch (error) {
        console.error("Fetch error:", error);
        toast.error(`Failed to fetch: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };
    getConversation();
  }, []);

  return { loading, conversations };
};

export default useGetConversation;
