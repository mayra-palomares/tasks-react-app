import { useParams } from 'react-router-dom';
import ErrorPage from '../../components/common/ErrorPage';
import Loading from '../../components/common/Loading';
import TaskForm from '../../components/TaskForm';
import useFetch from '../../hooks/useFetch';
import { Task, TaskRequest } from '../../types/Task';
import { put } from '../../utils/api';
import { FC } from 'react';
import notify from '../../utils/notify';

const EditTask: FC = () => {
	const params = useParams();
	const taskId = params?.id ?? '';
	const { data = {}, isLoading, error } = useFetch<Task>(`/tasks/${taskId}`);
	const task = data as Task;

	const handleSave = async (data: TaskRequest) => {
		await put(`/tasks/${task._id}`, data);
		notify('Task updated successfully');
	};

	if (isLoading) {
		return <Loading />;
	}

	if (error) {
		return <ErrorPage />;
	}

	return (
		<div className="task-detail">
			<h1 className="title">EDIT TASK</h1>
			<TaskForm task={task} handleSave={handleSave} editMode={true} />
		</div>
	);
};

export default EditTask;
