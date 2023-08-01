import { useNavigate } from 'react-router-dom';
import ErrorPage from '../components/common/ErrorPage';
import Loading from '../components/common/Loading';
import TaskList from '../components/TaskList';
import useFetch from '../hooks/useFetch';
import { Task } from '../types/Task';

const Tasks = () => {
	const { data, isLoading, error } = useFetch<Task[]>('/tasks');
	const navigate = useNavigate();

	const handleAddTask = () => navigate('/tasks/create');

	if (error) {
		return <ErrorPage />;
	}

	return (
		<main className="task-page">
			<h1 className="title">TASK LIST</h1>
			<button onClick={handleAddTask}>Add Task</button>
			{isLoading ? <Loading /> : <TaskList tasks={data ?? []} />}
		</main>
	);
};

export default Tasks;
