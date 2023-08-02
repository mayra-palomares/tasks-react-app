import { FC } from 'react';
import { Task } from '../../types/Task';
import TaskItem from './TaskItem';

type TaskListProps = {
	tasks: Task[];
};

const TaskList: FC<TaskListProps> = ({ tasks }) => {
	return (
		<ul className="list">
			{tasks.map((task) => (
				<TaskItem key={task._id} task={task} />
			))}
		</ul>
	);
};

export default TaskList;
