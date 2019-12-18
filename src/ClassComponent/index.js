import React from 'react';
import '../styles.css';

export default class ClassComponent extends React.Component {
  state = {
    newTask: '',
    tasks: [],
    loading: false,
  };

  componentDidMount() {
    const tasks = localStorage.getItem('tasks');
    if (tasks) {
      this.setState({ tasks: JSON.parse(tasks) });
    }
  }

  componentDidUpdate(_, prevState) {
    const { tasks } = this.state;
    if (prevState.tasks !== tasks) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  handleChange = e => {
    this.setState({ newTask: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true });

    const { newTask, tasks } = this.state;

    setTimeout(() => {
      this.setState({
        tasks: [...tasks, newTask],
        newTask: '',
        loading: false,
      });
    }, 3000);
  };

  render() {
    const { newTask, loading, tasks } = this.state;
    return (
      <div className={loading ? 'container' : 'none'}>
        {loading ? (
          <div className="content center">
            <h1>Loading...</h1>
          </div>
        ) : (
          <div className="content">
            <h1>Tasks</h1>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="Adicionar repositório"
                value={newTask}
                onChange={this.handleChange}
              />
            </form>
            <ul>
              {tasks.map(task => (
                <li key={task}>{task}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}
