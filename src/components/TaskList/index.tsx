import { FC } from 'react';
import { Task } from '../../types/Task';
import TaskItem from './TaskItem';

type TaskListProps = {
	tasks: Task[];
	handleComplete: (taskId: string) => Promise<void>;
	handleDelete: (taskId: string) => Promise<void>;
};

const TaskList: FC<TaskListProps> = ({
	tasks,
	handleComplete,
	handleDelete,
}) => {
	return (
		<ul className="list">
			{tasks.map((task) => (
				<TaskItem
					key={task._id}
					task={task}
					handleComplete={handleComplete}
					handleDelete={handleDelete}
				/>
			))}
		</ul>
	);
};

export default TaskList;
