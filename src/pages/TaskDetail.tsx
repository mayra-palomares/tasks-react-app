import { useParams } from 'react-router-dom';
import { EditActionButtons } from '../components/ActionButtons';
import TaskForm from '../components/TaskForm';
import useFetch from '../hooks/useFetch';
import { Task } from '../types/Task';
import Loading from '../components/Loading';
import ErrorPage from '../components/ErrorPage';

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
			<EditActionButtons />
		</div>
	);
};

export default TaskDetail;
