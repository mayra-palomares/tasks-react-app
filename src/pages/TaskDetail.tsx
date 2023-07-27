import { useParams } from 'react-router-dom';
import ErrorPage from '../components/ErrorPage';
import Loading from '../components/Loading';
import TaskForm from '../components/TaskForm';
import useFetch from '../hooks/useFetch';
import { Task } from '../types/Task';

const TaskDetail = () => {
	const params = useParams();
	const taskId = params?.id ?? '';
	const { data = {}, isLoading, error } = useFetch<Task>(`/tasks/${taskId}`);
	const task = data as Task;

	if (isLoading) {
		return <Loading />;
	}

	if (error) {
		return <ErrorPage />;
	}

	return (
		<div className="task-detail">
			<h1 className="title">EDIT TASK</h1>
			<TaskForm task={task} />
		</div>
	);
};

export default TaskDetail;
