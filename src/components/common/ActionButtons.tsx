import { Link, useNavigate } from 'react-router-dom';

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

export const ListItemActionButtons = ({ taskId }: Props) => {
	return (
		<div className="action-buttons">
			<EditButton taskId={taskId} />
			<DeleteButton taskId={taskId} />
		</div>
	);
};

const CancelButton = () => {
	const navigate = useNavigate();

	const handleCancel = () => navigate('/');
	return <button onClick={handleCancel}>Cancel</button>;
};

type SaveButtonsProps = {
	handleSave: () => void;
};

const SaveButton = ({ handleSave }: SaveButtonsProps) => {
	const handleClick = () => {
		handleSave();
	};
	return <button onClick={handleClick}>Save</button>;
};

type FormActionButtonsProps = {
	handleSave: () => void;
};

export const FormActionButtons = ({ handleSave }: FormActionButtonsProps) => {
	return (
		<div className="edit-action-buttons">
			<CancelButton />
			<SaveButton handleSave={handleSave} />
		</div>
	);
};
