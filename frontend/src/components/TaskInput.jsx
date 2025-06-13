import { useState } from 'react';
import axios from 'axios';

export default function TaskInput({ onAdd }) {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    try {
      const res = await axios.post('http://localhost:5000/api/task/parse', { input });
      console.log('Parsed task:', res);
      onAdd(res.data);
      setInput('');
    } catch (err) {
      alert('Error parsing task');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: '10px', width: '70%' }}
      />
      <button type="submit" disabled={loading} style={{ padding: '10px', marginLeft: '10px' }}>
        {loading ? 'Parsing...' : 'Add Task'}
      </button>
    </form>
  );
}
