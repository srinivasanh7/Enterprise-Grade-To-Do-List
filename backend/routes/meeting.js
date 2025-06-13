// routes/meeting.js
const express = require('express');
const router = express.Router();
const OpenAI = require('openai');
require('dotenv').config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post('/parse', async (req, res) => {
  const { transcript } = req.body;

  if (!transcript) {
    return res.status(400).json({ error: 'Transcript is required' });
  }

  try {
    const prompt = `
You are a helpful assistant. I will give you an entire transcript and i want you to check and Extract all the tasks from the following meeting transcript without leaving anything.
For each task, return:
- Task description (clear and concise)
- Assignee (person responsible)
- Due date and time (use ISO 8601 format like "2025-06-14T22:00:00")
- Priority (if mentioned, else default to P3)

Transcript:
"${transcript}"

Respond only in JSON array format like:
[
  {
    "task": "Take the landing page",
    "assignee": "Aman",
    "due": "2025-06-14T22:00:00",
    "priority": "P3"
  },
  ...
]
`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.2,
    });

    const jsonString = completion.choices[0].message.content.trim();
console.log('Raw AI response:', jsonString);

const cleaned = jsonString
  .replace(/```json/, '')
  .replace(/```/, '')
  .trim();

let parsed;
try {
  parsed = JSON.parse(cleaned);
  console.log('Parsed tasks:', parsed);
  res.json(parsed);
} catch (err) {
  console.error('JSON Parse Error:', err.message);
  res.status(500).json({ error: 'Invalid JSON from OpenAI', raw: cleaned });
}


  } catch (err) {
    console.error('OpenAI Error:', err.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
