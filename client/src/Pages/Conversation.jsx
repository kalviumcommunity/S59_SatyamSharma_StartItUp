import React, { useState } from 'react'
import { getAnswer } from '../Langchain'

function Conversation() {
    const[question,setQuestion]= useState("")
    const[results,setResults]=useState("")

    async function handlesubmit(e){
        e.preventDefault();
        const answer =await getAnswer(question);
        console.log(answer);
    }

    

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <div className='bg-white'>
            <form onSubmit={handlesubmit}>
                <h2>Enter Your Message</h2>
                <input 
                type="text"
                value={question}
                onChange={(e)=>setQuestion(e.target.value)} 
                />
                <button type='submit' className='bg-blue-500'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Conversation