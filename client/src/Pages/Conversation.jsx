import React, { useState } from 'react';
import { getAnswer } from '../Langchain';
import { useAppContext } from '../Appcontext';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function Conversation() {
    const { id, nam, con, setCon, conversationData, token } = useAppContext();
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

            const response = await fetch(${import.meta.env.VITE_URL}/api/conversations, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': Bearer ${token},
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
            setError("An error occurred while fetching the answer. Please try again.");
        }
        setCon(!con);
    };

    return (
        <div className='w-screen h-screen flex justify-center items-center pt-44 p-4'>
            <ToastContainer />
            <div className='bg-white p-6 rounded shadow-lg w-full max-w-3xl'>
                <form onSubmit={handlesubmit} className='mb-4'>
                    <h2 className='text-2xl font-bold mb-2'>Enter Your Message</h2>
                    <input 
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)} 
                        className='border p-2 mb-2 w-full rounded'
                    />
                    <button type='submit' className='bg-blue-500 text-white p-2 rounded'>Submit</button>
                </form>
                {error && <p className='text-red-500 mb-2'>{error}</p>}
                {results && <div className='bg-gray-200 p-4 rounded mb-2'>
                    <p className='font-bold'>Response:</p>
                    <p>{results}</p>
                </div>}
                <div className='mt-4'>
                    <h2 className='text-xl font-bold mb-2'>Previous Conversations</h2>
                    <div className='space-y-4'>
                        {conversationData.map((conversation, index) => (
                            <div key={index} className='bg-gray-100 p-4 rounded shadow'>
                                <div className='mb-2'>
                                    <p className='text-sm text-gray-600'>
                                        <strong>Date:</strong> {new Date(conversation.date).toLocaleDateString()} <strong>Time:</strong> {conversation.time}
                                    </p>
                                    <p className='font-bold'>Question:</p>
                                    <p>{conversation.questionAsked}</p>
                                </div>
                                <div>
                                    <p className='font-bold'>Answer:</p>
                                    <p>{conversation.answerGenerated}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Conversation;
