 
'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
// import { useRouter } from "next/navigation";
import { useRouter, useSearchParams } from "next/navigation";

const Page = ({params}) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setMessages((prevMessages) => [...prevMessages, inputValue]);
      setInputValue('');
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat on message update
    const chatContainer = document.getElementById('chat-container');
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]);
  
  // const searchParams = useSearchParams();
  // const promptId = searchParams.get("id");

  const [msg, setMsg] = useState([]);
  useEffect(() => {
    // console.log("ididid: ",params.id);
    const getMsg = async () => {
      const response = await fetch(`https://travel-jpx4.onrender.com/api/messages/${params.id}`);
      const data = await response.json();

      setMsg(data);
    };

    if (params.id) getMsg();
  }, []);

  console.log("msg",msg);


  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div id="chat-container" className="flex-1 p-6 overflow-y-auto">
      {/* {msg && msg.map((message, index) => (
  <div
    key={message._id}
    className="flex flex-col mb-4 max-w-xs rounded-lg bg-white shadow-md self-end"
  >
    <div className="px-4 py-2">
      <p className="text-sm text-gray-700">{message}</p>
    </div>
  </div>
))} */}

{Array.isArray(msg) && msg.map((message, index) => (
  <div
    key={index}
    className="flex flex-col mb-4 max-w-xs rounded-lg bg-white shadow-md self-end"
  >
    <div className="px-4 py-2">
      <p className="text-sm text-gray-700">{message.desc}</p>
    </div>
  </div>
))}


      </div>
      <div className="flex-shrink-0 p-4 bg-white border-t-2 border-gray-200">
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Type your message..."
            className="flex-grow px-4 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
