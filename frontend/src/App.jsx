import { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';


function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks((prev) => [...prev, task]);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h2>🧠 Natural Language Task Manager</h2>
      <TaskInput onAdd={handleAddTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
