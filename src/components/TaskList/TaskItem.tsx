import { FC } from 'react';
import { Task } from '../../types/Task';
import { ListItemActionButtons } from './ActionButtons';

type TaskItemProps = {
	task: Task;
};

const TaskItem: FC<TaskItemProps> = ({ task }) => {
	return (
		<li className="task">
			<div>
				<h3>{task.title}</h3>
				<p>{task.description}</p>
			</div>
			<ListItemActionButtons taskId={task._id} />
		</li>
	);
};

export default TaskItem;
