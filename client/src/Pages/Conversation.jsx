import React, { useState } from 'react';
import { getAnswer } from '../Langchain';
import { useAppContext } from '../Appcontext';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function Conversation() {
    const { id, nam, con,setCon, token } = useAppContext();
    const [question, setQuestion] = useState("");
    const [results, setResults] = useState("");
    const [error, setError] = useState("");

    const getCurrentTime = () => {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        setError(""); 

        try {
            const currentDate = new Date().toISOString().slice(0, 10);
            const currentTime = getCurrentTime();
            const answer = await getAnswer(question);
            setResults(answer);
            // console.log(answer);

            const response = await fetch(`${import.meta.env.VITE_URL}/api/conversations`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    uniqueId: id,
                    userName: nam,
                    date: currentDate,
                    time: currentTime,
                    questionAsked: question,
                    answerGenerated: answer,
                }),
            });

            if (response.ok) {
                toast.success('Posted');
            } else {
                toast.info('Login to Post Content');
            }
        } catch (error) {
            toast.error("Error", error.message);
            console.error(error);
            setError("An error occurred while fetching the answer. Please try again.");
        }
        setCon(!con);
    };

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <ToastContainer/>
            <div className='bg-white p-4 rounded shadow'>
                <form onSubmit={handlesubmit}>
                    <h2>Enter Your Message</h2>
                    <input 
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)} 
                        className='border p-2 mb-2 w-full'
                    />
                    <button type='submit' className='bg-blue-500 text-white p-2 rounded'>Submit</button>
                </form>
                {error && <p className='text-red-500 mt-2'>{error}</p>}
                {results && <p className='mt-2'>{results}</p>}
            </div>
        </div>
    );
}

export default Conversation;
