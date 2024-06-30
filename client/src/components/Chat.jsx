import React, { useEffect, useMemo, useState } from 'react';
import { io } from 'socket.io-client';

function Chat() {
  const socket = useMemo(() => io(import.meta.env.VITE_URL), []);

  const [message, setMessage] = useState("");
  const [room, setRoom] = useState("");
  const [socketId, setSocketId] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [roomName, setRoomName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", { message, room });
    setMessage("");
    setRoom("");
  };

  const joinRoom = (e) => {
    e.preventDefault();
    socket.emit('join-room', roomName);
    setRoomName("");
  };

  useEffect(() => {
    socket.on("connect", () => {
      setSocketId(socket.id);
      console.log("connected", socket.id);
    });

    socket.on("welcome", (e) => {
      console.log(e);
    });

    socket.on("received", (e) => {
      console.log(e);
      setChatHistory((prev) => [...prev, e]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className='flex flex-col justify-center items-center pt-16 h-screen bg-gray-800 text-white'>
      <div className='bg-gray-900 text-gray-200 rounded-xl w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 h-5/6 md:h-4/5 p-4 shadow-lg'>
        <h1 className='text-blue-400 text-4xl font-bold mb-6 text-center'>Chat With Us</h1>
        <button className='bg-red-600 text-white p-2 rounded-md'>Test Mode</button>
        <div className='mb-4'>
          <h2 className='text-xl font-semibold mb-2'>Present Socket ID:</h2>
          <p className='text-lg font-medium'>{socketId}</p>
        </div>
        <form onSubmit={joinRoom} className='flex items-center mb-6'>
          <input 
            type='text' 
            value={roomName} 
            onChange={e => setRoomName(e.target.value)} 
            placeholder='Enter room name' 
            className='rounded-l-lg p-2 w-full md:w-2/3 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button 
            type='submit' 
            className='bg-blue-700 text-white rounded-r-lg px-4 py-2 ml-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            Create
          </button>
        </form>

        <form onSubmit={handleSubmit} className='flex flex-col mb-6'>
          <textarea 
            value={message} 
            onChange={e => setMessage(e.target.value)} 
            placeholder='Enter your message' 
            className='rounded-lg p-2 mb-2 w-full md:w-2/3 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <input 
            type='text' 
            value={room} 
            onChange={e => setRoom(e.target.value)} 
            placeholder='Enter room name' 
            className='rounded-lg p-2 mb-2 w-full md:w-2/3 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
          <button 
            type='submit' 
            className='bg-blue-700 text-white rounded-lg px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            Submit
          </button>
        </form>

        <div className='flex flex-col items-start space-y-4 h-4/5 overflow-y-auto'>
          <h2 className='text-xl font-semibold text-blue-400 mb-2'>Messages</h2>
          {chatHistory.map((msg, i) => (
            <div key={i} className='bg-gray-700 text-gray-200 p-2 rounded-lg self-start'>
              <p>{msg}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Chat;
