import React, { useEffect, useMemo, useState } from 'react'
import {io} from 'socket.io-client'

function Chat() {

const socket = useMemo(()=>
	 io(import.meta.env.VITE_URL)
,[])
 
const [message,setMessage]= useState("")
const [room,setRoom]= useState("")
const [socketId,setSocketId]= useState("")
const [chatHistory,setchatHistory]= useState([])
const [roomName,setRoomName]= useState("")





const handleSubmit=(e)=>{
	e.preventDefault()
	socket.emit("message",{message,room})
	setMessage("")
	setRoom("")
}
const joinRoom=(e)=>{
	e.preventDefault()
	socket.emit('join-room',roomName)
	setRoomName("")
}


useEffect(()=>{
	socket.on("connect",()=>{
		setSocketId(socket.id)
		console.log("connected",socket.id)
	})
socket.on("welcome",(e)=>{
	console.log(e)
});

socket.on("recived",(e)=>{
	console.log(e)
	setchatHistory((pre)=>[...pre,e])
});

return ()=>{
	socket.disconnect()
}

},[])

  return (
	<div className='flex-col justify-center my-36 items-center flex'>
		
		<div className='bg-blue-700 text-white rounded-xl w-1/2 h-4/5'>
			<h1 className='text-white text-4xl font-itim my-5 '>Chat With Us</h1>
			<h1 className='text-white font-bold'>Present Socket Id :- {socketId}</h1>
			<h1 className='my-2'>Room Name</h1>
			<form onSubmit={joinRoom} className='flex justify-center ' >
					<textarea className='rounded text-black' value={roomName} placeholder='Newroom' onChange={e=>setRoomName(e.target.value)}></textarea>
					<button className='bg-black p-1 rounded' type='submit'>Create</button>
				</form>


				<form onSubmit={handleSubmit} className='flex justify-center flex-col items-center '  >
					<h1 className='my-5'>Message </h1>
					<textarea className='rounded text-black' value={message} placeholder='message' onChange={e=>setMessage(e.target.value)}></textarea>
					<br/>
					<h1>UserId</h1>
					<br/>
					<textarea value={room} className='rounded text-black'  placeholder='room' onChange={e=>setRoom(e.target.value)}></textarea>

					<button className='bg-black m-2 p-1 rounded' type='submit'>Submit</button>
				</form>
		</div>
		<div className='flex flex-col justify-center items-center'>
			<h1 className='text-white bg-slate-600 p-1 m-2 rounded'>Messages</h1>
		{chatHistory.map((e,i)=>{
			return (
				<div className='text-black bg-white p-1 m-2 rounded font-itim' key={i}>
					{e}
				</div>
			)
		})}
	</div>
	</div>
  )
}

export default Chat