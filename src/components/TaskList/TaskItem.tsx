import { FC } from 'react';
import { Task } from '../../types/Task';
import ListItemActionButtons from './ListItemActionButtons';

type TaskItemProps = {
	task: Task;
	handleComplete: (taskId: string) => Promise<void>;
	handleDelete: (taskId: string) => Promise<void>;
};

const TaskItem: FC<TaskItemProps> = ({
	task,
	handleComplete,
	handleDelete,
}) => {
	return (
		<li className="task">
			<div>
				<h3 className={task.completed ? 'title-completed' : ''}>
					{task.title}
				</h3>
				<p>{task.description}</p>
			</div>
			<ListItemActionButtons
				taskId={task._id}
				handleComplete={handleComplete}
				handleDelete={handleDelete}
				showCompleteBtn={!task.completed}
			/>
		</li>
	);
};

export default TaskItem;
