import { FC } from 'react';
import { Link } from 'react-router-dom';

type ButtonProps = {
	taskId: string;
};

const EditButton: FC<ButtonProps> = ({ taskId }) => {
	return (
		<Link to={`/tasks/${taskId}`}>
			<img width="30px" src="/edit.svg" alt="Edit" />
		</Link>
	);
};

const DeleteButton: FC<ButtonProps> = ({ taskId }) => {
	const handleClick = () => {
		alert('Delete task with ID: ' + taskId);
	};

	return (
		<a onClick={handleClick}>
			<img width="30px" src="/delete.svg" alt="Delete" />
		</a>
	);
};

export const ListItemActionButtons: FC<ButtonProps> = ({ taskId }) => {
	return (
		<div className="action-buttons">
			<EditButton taskId={taskId} />
			<DeleteButton taskId={taskId} />
		</div>
	);
};
