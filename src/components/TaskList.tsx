import { Task } from '../types/Task';
import TaskItem from './TaskItem';

type Props = {
	tasks: Task[];
};

const TaskList = ({ tasks }: Props) => {
	return (
		<ul className="list">
			{tasks.map((task) => (
				<TaskItem key={task._id} task={task} />
			))}
		</ul>
	);
};

export default TaskList;
