import { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './TaskList.module.css';

type ButtonProps = { taskId: string };
type CompleteButtonProps = ButtonProps & {
	handleComplete: (taskId: string) => Promise<void>;
};
type DeleteButtonProps = ButtonProps & {
	handleDelete: (taskId: string) => Promise<void>;
};
type ActionButtonsProps = CompleteButtonProps &
	DeleteButtonProps & { showCompleteBtn: boolean };

const CompleteButton: FC<CompleteButtonProps> = ({
	taskId,
	handleComplete,
}) => {
	const handleClick = () => {
		handleComplete(taskId);
	};
	return (
		<a onClick={handleClick}>
			<img width="30px" src="/complete.svg" alt="Complete" />
		</a>
	);
};

const EditButton: FC<ButtonProps> = ({ taskId }) => {
	return (
		<Link to={`/tasks/${taskId}`}>
			<img width="30px" src="/edit.svg" alt="Edit" />
		</Link>
	);
};

const DeleteButton: FC<DeleteButtonProps> = ({ taskId, handleDelete }) => {
	const handleClick = () => {
		handleDelete(taskId);
	};
	return (
		<a onClick={handleClick}>
			<img width="30px" src="/delete.svg" alt="Delete" />
		</a>
	);
};

const ListItemActionButtons: FC<ActionButtonsProps> = ({
	taskId,
	handleComplete,
	handleDelete,
	showCompleteBtn = true,
}) => {
	return (
		<div className={styles['action-buttons']}>
			{showCompleteBtn ? (
				<CompleteButton taskId={taskId} handleComplete={handleComplete} />
			) : null}
			<EditButton taskId={taskId} />
			<DeleteButton taskId={taskId} handleDelete={handleDelete} />
		</div>
	);
};

export default ListItemActionButtons;
