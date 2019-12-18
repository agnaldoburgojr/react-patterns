/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import '../styles.css';

export default function FunctionComponent() {
  const [state, setState] = React.useState({
    newTask: '',
    tasks: [],
    loading: false,
  });

  React.useEffect(() => {
    const tasks = localStorage.getItem('tasks');
    setState({ ...state, tasks: JSON.parse(tasks) });
  }, []);

  React.useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(state.tasks));
  }, [state.tasks]);

  const handleChange = e => {
    setState({ ...state, newTask: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setState({ ...state, loading: true });

    setTimeout(() => {
      setState({
        tasks: [...state.tasks, state.newTask],
        newTask: '',
        loading: false,
      });
    }, 3000);
  };

  return (
    <div className={state.loading ? 'container' : 'none'}>
      {state.loading ? (
        <div className="content center">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div className="content">
          <h1>Tasks</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Adicionar repositório"
              value={state.newTask}
              onChange={handleChange}
            />
          </form>
          <ul>
            {state.tasks.map(task => (
              <li key={task}>{task}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
