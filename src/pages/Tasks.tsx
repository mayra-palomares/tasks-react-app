import TaskList from '../components/TaskList';
import useFetch from '../hooks/useFetch';
import { Task } from '../types/Task';

const Tasks = () => {
	const { response } = useFetch<Task[]>('/tasks');
	const data = response ?? [];

	return (
		<main className="task-page">
			<h1 className="title">TASK LIST</h1>
			<button>Add Task</button>
			<TaskList tasks={data} />
		</main>
	);
};

export default Tasks;
