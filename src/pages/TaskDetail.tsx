import { EditActionButtons } from '../components/ActionButtons';
import TaskForm from '../components/TaskForm';

const TaskDetail = () => {
	return (
		<div className="task-detail">
			<h1 className="title">EDIT TASK</h1>
			<TaskForm />
			<EditActionButtons taskId={''} />
		</div>
	);
};

export default TaskDetail;
