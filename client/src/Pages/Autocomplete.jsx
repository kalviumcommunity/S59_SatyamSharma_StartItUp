import React, { useState } from 'react';

const Autocomplete = () => {
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (event) => {
    setInput(event.target.value);

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
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error('Error fetching autocomplete suggestions:', error);
      }
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        className="p-2 mb-4 text-black rounded-md"
        placeholder="Start typing..."
      />
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
