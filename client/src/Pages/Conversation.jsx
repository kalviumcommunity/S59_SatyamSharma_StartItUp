import React, { useState } from 'react';
import { getAnswer } from '../Langchain';

function Conversation() {
    const [question, setQuestion] = useState("");
    const [results, setResults] = useState("");
    const [error, setError] = useState("");

    async function handlesubmit(e) {
        e.preventDefault();
        setError(""); 
        try {
            const answer = await getAnswer(question);
            setResults(answer);
            console.log(answer);
        } catch (e) {
            console.error(e);
            setError("An error occurred while fetching the answer. Please try again.");
        }
    }

    return (
        <div className='w-screen h-screen flex justify-center items-center'>
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
