const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const taskRoutes = require('./routes/task');
const meetingRoutes = require('./routes/meeting')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.use('/api/task', taskRoutes);
app.use('/api/meeting', meetingRoutes); 

app.get('/', (req, res) => {
  res.send('Task Manager Backend is Running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
