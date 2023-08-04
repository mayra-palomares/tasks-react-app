import { FC } from 'react';
import TaskForm from '../../components/TaskForm';
import { TaskRequest } from '../../types/Task';
import { post } from '../../utils/api';
import notify from '../../utils/notify';
import { useNavigate } from 'react-router-dom';

const CreateTask: FC = () => {
	const navigate = useNavigate();

	const handleSave = async (data: TaskRequest) => {
		await post('/tasks', data);
		navigate('/');
		notify('Task created successfully!');
	};

	return (
		<div className="task-detail">
			<h1 className="title">CREATE TASK</h1>
			<TaskForm handleSave={handleSave} />
		</div>
	);
};

export default CreateTask;
