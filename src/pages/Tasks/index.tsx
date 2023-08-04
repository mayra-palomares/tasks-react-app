import { useNavigate } from 'react-router-dom';
import ErrorPage from '../../components/common/ErrorPage';
import Loading from '../../components/common/Loading';
import TaskList from '../../components/TaskList';
import useFetch from '../../hooks/useFetch';
import { Task } from '../../types/Task';
import { FC } from 'react';
import { deleteById, post } from '../../utils/api';
import styles from './Tasks.module.css';
import notify from '../../utils/notify';

const Tasks: FC = () => {
	const { data, isLoading, error, fetchData } = useFetch<Task[]>('/tasks');
	const navigate = useNavigate();

	const handleAddTask = () => navigate('/tasks/create');

	const handleComplete = async (taskId: string) => {
		await post(`/tasks/${taskId}/complete`, {});
		notify('Task completed successfully');
		fetchData();
	};

	const handleDelete = async (taskId: string) => {
		await deleteById(`/tasks/${taskId}`);
		notify('Task deleted successfully!');
		fetchData();
	};

	if (error) {
		return <ErrorPage />;
	}

	return (
		<main className={styles['task-page']}>
			<h1 className={styles['title']}>TASK LIST</h1>
			<button onClick={handleAddTask}>Add Task</button>
			{isLoading ? (
				<Loading />
			) : (
				<TaskList
					tasks={data ?? []}
					handleComplete={handleComplete}
					handleDelete={handleDelete}
				/>
			)}
		</main>
	);
};

export default Tasks;
