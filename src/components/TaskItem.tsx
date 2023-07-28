import { Task } from '../types/Task';
import { ListItemActionButtons } from './common/ActionButtons';

type Props = {
	task: Task;
};

const TaskItem = ({ task }: Props) => {
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
