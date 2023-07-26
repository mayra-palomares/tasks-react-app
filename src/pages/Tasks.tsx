import TaskList from '../components/TaskList';
import data from '../mocks/tasks.json';

const Tasks = () => {
	return (
		<main className="task-page">
			<h1 className="title">TASK LIST</h1>
			<button>Add Task</button>
			<TaskList tasks={data} />
		</main>
	);
};

export default Tasks;
