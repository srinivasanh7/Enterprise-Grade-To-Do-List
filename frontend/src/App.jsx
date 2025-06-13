import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import TranscriptParser from './components/TranscriptParser';


function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

    const handleTasksParsed = (newTasks) => {
    setTasks((prev) => [...prev, ...newTasks]);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>🧠 Natural Language Task Manager</h2>
      <TaskInput onAdd={handleAddTask} />
      <TranscriptParser onTasksParsed={handleTasksParsed} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
