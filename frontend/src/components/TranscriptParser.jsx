import React, { useState } from 'react';
import axios from 'axios';

const TranscriptParser = ({ onTasksParsed }) => {
  const [transcript, setTranscript] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleParse = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.post('http://localhost:5000/api/meeting/parse', {
        transcript,
      });
      onTasksParsed(res.data); // send tasks back to parent
    //   setTranscript('');
    } catch (err) {
      setError('Failed to parse transcript');
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="p-4 rounded-xl shadow bg-white mb-6">
      <h2 className="text-lg font-semibold mb-2">Meeting Transcript Parser</h2>
      <textarea
        rows={6}
        className="w-full border border-gray-300 p-2 rounded mb-2"
        placeholder="Paste meeting transcript here..."
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
      />
      <button
        onClick={handleParse}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? 'Parsing...' : 'Parse Transcript'}
      </button>
      {error && <p className="text-red-600 mt-2">{error}</p>}
    </div>
  );
};

export default TranscriptParser;
