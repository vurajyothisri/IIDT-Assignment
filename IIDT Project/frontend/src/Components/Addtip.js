// frontend/src/App.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddtipsForcooking = () => {
  const [username, setUsername] = useState('');
  const [tipText, setTipText] = useState('');
  const [tips, setTips] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTips();
  }, []);

  const fetchTips = async () => {
    try {
      const response = await axios.get('/tips');
      setTips(response.data);
    } catch (error) {
      console.error('Error fetching tips:', error);
      setError('Failed to fetch tips. Please try again later.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/tips', { username, text: tipText });
      alert('Tip added successfully!');
      setUsername('');
      setTipText('');
      fetchTips(); // Refresh tips after adding a new one
    } catch (error) {
      console.error('Error adding tip:', error);
      alert('Failed to add tip. Please try again later.');
    }
  };

  return (
    <div>
      <h1>Add Tips for Cooking</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Your username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="text" placeholder="Tip" value={tipText} onChange={(e) => setTipText(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      {error && <p>{error}</p>}
      <h2>Tips:</h2>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>
            <strong>{tip.username}:</strong> {tip.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddtipsForcooking;
