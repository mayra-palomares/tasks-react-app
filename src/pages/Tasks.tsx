import ErrorPage from '../components/ErrorPage';
import Loading from '../components/Loading';
import TaskList from '../components/TaskList';
import useFetch from '../hooks/useFetch';
import { Task } from '../types/Task';

const Tasks = () => {
	const { data, isLoading, error } = useFetch<Task[]>('/tasks');

	if (error) {
		return <ErrorPage />;
	}

	return (
		<main className="task-page">
			<h1 className="title">TASK LIST</h1>
			<button>Add Task</button>
			{isLoading ? <Loading /> : <TaskList tasks={data ?? []} />}
		</main>
	);
};

export default Tasks;
