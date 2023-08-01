import { FC } from 'react';
import TaskForm from '../components/TaskForm';
import { TaskRequest } from '../types/Task';
import { post } from '../utils/api';

const CreateTask: FC = () => {
	const handleSave = async (data: TaskRequest) => {
		await post('/tasks', data);
		alert('Task was created successfully');
	};

	return (
		<div className="task-detail">
			<h1 className="title">CREATE TASK</h1>
			<TaskForm handleSave={handleSave} />
		</div>
	);
};

export default CreateTask;
