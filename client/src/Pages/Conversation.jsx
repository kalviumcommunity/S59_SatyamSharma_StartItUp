import React, { useState } from 'react';
import { getAnswer } from '../Langchain';
import { useAppContext } from '../Appcontext';
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FadeLoader } from 'react-spinners';

function Conversation() {
    const { id, nam, con, setCon, conversationData, token } = useAppContext();
    const [question, setQuestion] = useState("");
    const [currentConversation, setCurrentConversation] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false); 

    const getCurrentTime = () => {
        const now = new Date();
        return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    };

    const formatText = (text) => {
        const boldRegex = /\\(.?)\\*/g;
        const bulletRegex = /^\(.)$/gm;

        let formattedText = text.replace(boldRegex, (match, p1) => <strong>`${p1}`</strong>);
        const lines = formattedText.split('\n');
        const formattedLines = lines.map((line, index) => {
            if (bulletRegex.test(line)) {
                return <li key={index} dangerouslySetInnerHTML={{ __html: line.replace(bulletRegex, (match, p1) => p1.trim()) }} />;
            } else {
                return <p key={index} dangerouslySetInnerHTML={{ __html: line }} />;
            }
        });

        return formattedLines;
    };

    const handlesubmit = async (e) => {
        e.preventDefault();
        setError("");
        setCurrentConversation(null); 
        setLoading(true); 

        try {
            const currentDate = new Date().toISOString().slice(0, 10);
            const currentTime = getCurrentTime();
            const answer = await getAnswer(question);

            const newConversation = {
                uniqueId: id,
                userName: nam,
                date: currentDate,
                time: currentTime,
                questionAsked: question,
                answerGenerated: answer,
            };

            setCurrentConversation(newConversation);

            const response = await fetch(`${import.meta.env.VITE_URL}/api/conversations`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': Bearer `${token}`,
                },
                body: JSON.stringify(newConversation),
            });

            if (response.ok) {
                toast.success('Posted');
            } else {
                toast.info('Login to Post Content');
            }
        } catch (error) {
            toast.error("Error", error.message);
            setError("An error occurred while fetching the answer. Please try again.");
        } finally {
            setLoading(false); 
            setCon(!con);
        }
    };

    return (
        <div className='flex pb-10 pt-20 h-screen relative'>
            <ToastContainer />
            {loading && <div className="absolute inset-0 bg-gray-300 opacity-70 blur"></div>}
            <aside className='w-64 bg-gray-800 text-white p-4 overflow-y-auto'>
                <h2 className='text-xl font-bold mb-4'>Chat History</h2>
                <div className='space-y-2'>
                    {conversationData.map((conversation, index) => (
                        <div
                            key={index}
                            className='bg-gray-700 p-2 rounded cursor-pointer'
                            onClick={() => setCurrentConversation(conversation)}
                        >
                            <p className='text-sm'>{new Date(conversation.date).toLocaleDateString()} {conversation.time}</p>
                            <p className='font-bold truncate'>{conversation.questionAsked}</p>
                        </div>
                    ))}
                </div>
            </aside>
            <div className='flex flex-col flex-1 bg-gray-100'>
                <div className='flex-1 overflow-y-auto p-4'>
                    {currentConversation ? (
                        <div className='space-y-4'>
                            <div className='bg-gray-200 p-4 rounded shadow'>
                                <div className='mb-2'>
                                    <p className='text-sm text-gray-600'>
                                        <strong>Date:</strong> {new Date(currentConversation.date).toLocaleDateString()} <strong>Time:</strong> {currentConversation.time}
                                    </p>
                                    <p className='font-bold'>Question:</p>
                                    <div>{formatText(currentConversation.questionAsked)}</div>
                                </div>
                                <div>
                                    <p className='font-bold'>Answer:</p>
                                    <div>{formatText(currentConversation.answerGenerated)}</div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='text-gray-500 text-center'>
                            <h1 className='font-bold text-6xl font-itim'>Start-It-Up</h1>
                            <p>Select a conversation from the sidebar or ask a new question.</p>
                        </div>
                    )}
                    {error && <p className='text-red-500 mt-2'>{error}</p>}
                </div>
                <div className='sticky bottom-0 bg-white p-4 border-t'>
                    <form onSubmit={handlesubmit} className='flex'>
                        <input 
                            type="text"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)} 
                            className='flex-1 border p-2 rounded mr-2'
                            placeholder='Enter your Question'
                        />
                        <button type='submit' className='bg-blue-500 text-white p-2 rounded'>Submit</button>
                    </form>
                </div>
            </div>
            {loading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <FadeLoader color="#00BFFF" loading={true} height={15} radius={2} margin={4} />
                </div>
            )}
        </div>
    );
}

export default Conversation;