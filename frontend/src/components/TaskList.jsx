export default function TaskList({ tasks }) {
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th>Task</th>
          <th>Assignee</th>
          <th>Due Date</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, idx) => (
          <tr key={idx}>
            <td>{task.task}</td>
            <td>{task.assignee}</td>
            <td>{new Date(task.due).toLocaleString()}</td>
            <td>{task.priority}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
