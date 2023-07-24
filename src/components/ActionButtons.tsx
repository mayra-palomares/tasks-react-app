import { Link } from 'react-router-dom';

type Props = {
	taskId: string;
};

const EditButton = ({ taskId }: Props) => {
	return (
		<Link to={`/tasks/${taskId}`}>
			<img width="30px" src="/edit.svg" alt="Edit" />
		</Link>
	);
};

const DeleteButton = ({ taskId }: Props) => {
	const handleClick = () => {
		alert('Delete task with ID: ' + taskId);
	};

	return (
		<a onClick={handleClick}>
			<img width="30px" src="/delete.svg" alt="Delete" />
		</a>
	);
};

const ActionButtons = ({ taskId }: Props) => {
	return (
		<div className="actionButtons">
			<EditButton taskId={taskId} />
			<DeleteButton taskId={taskId} />
		</div>
	);
};

export default ActionButtons;
