import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApparelForm from './components/ApparelForm';
import ApparelList from './components/ApparelList';

function App() {
  const [apparels, setApparels] = useState([]);

  useEffect(() => {
    fetchApparels();
  }, []);

  const fetchApparels = async () => {
    try {
      const response = await axios.get('http://localhost:3000/get-submissions');
      setApparels(response.data);
    } catch (error) {
      console.error('Error fetching apparels:', error);
    }
  };

  const handleSubmit = async (apparelData) => {
    try {
      const response = await axios.post('http://localhost:3000/submit', apparelData);
      setApparels([...apparels, response.data]);
    } catch (error) {
      console.error('Error submitting apparel:', error);
    }
  };

  return (
    <div className="container">
      <h1>Apparel Disposal Platform</h1>
      <ApparelForm onSubmit={handleSubmit} />
      <ApparelList apparels={apparels} />
    </div>
  );
}

export default App;