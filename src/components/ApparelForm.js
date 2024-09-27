import React, { useState } from 'react';

function ApparelForm({ onSubmit }) {
  const [type, setType] = useState('');
  const [brand, setBrand] = useState('');
  const [condition, setCondition] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ type, brand, condition, description });
    // Clear form fields after submission
    setType('');
    setBrand('');
    setCondition('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Type:</label>
        <input type="text" className="form-control" value={type} onChange={(e) => setType(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Brand:</label>
        <input type="text" className="form-control" value={brand} onChange={(e) => setBrand(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Condition:</label>
        <input type="text" className="form-control" value={condition} onChange={(e) => setCondition(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Description:</label>
        <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}

export default ApparelForm;