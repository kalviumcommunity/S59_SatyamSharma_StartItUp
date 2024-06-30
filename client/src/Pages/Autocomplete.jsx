import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Autocomplete = () => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState('');

  const handleChange = async (event) => {
    setInput(event.target.value);
    setError(''); 

    if (event.target.value) {
      try {
        const response = await fetch(`${import.meta.env.VITE_URL}/api/autocomplete`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt: event.target.value }),
        });

        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Resource not found');
          } else if (response.status === 500) {
            throw new Error('Server error');
          } else {
            throw new Error('Network response was not ok');
          }
        }

        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error('Error fetching autocomplete suggestions:', error);
        setError(error.message);
        toast.error(error.message);
      }
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <ToastContainer />
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="p-2 mb-4 text-black rounded-md"
        placeholder="Start typing..."
      />
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <ul className="bg-gray-800 text-white rounded-md p-4 w-full max-w-md">
        {suggestions.map((suggestion, index) => (
          <li key={index} className="p-2 border-b border-gray-700 last:border-none">
            {suggestion.generated_text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
