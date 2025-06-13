const express = require('express');
const router = express.Router();
const { OpenAI } = require('openai');
require('dotenv').config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

router.post('/parse', async (req, res) => {
  const { input } = req.body;

  if (!input) return res.status(400).json({ error: 'Input is required' });

  const prompt = `
I will provide you a task and you need to parse the following task and return a JSON object with:
- task: string (the task to do)
- assignee: string (name of person responsible)
- due: ISO 8601 date-time format
- priority: P1, P2, P3, or P4 (default is P3)

Input: "${input}"
Return only the JSON.
`;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3
    });

    const result = completion.choices[0].message.content.trim();
    console.log("Raw LLM response:", completion.choices[0].message.content);
    console.log("LLM response:", result);
    const parsed = JSON.parse(result); // might need try/catch if LLM returns extra text

    res.json(parsed);
  } catch (err) {
    console.error("OpenAI error:", err.message);
    res.status(500).json({ error: "Failed to parse task" });
  }
});

module.exports = router;
