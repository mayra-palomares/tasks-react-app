import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const CancelButton: FC = () => {
	const navigate = useNavigate();

	const handleCancel = () => navigate('/');
	return <button onClick={handleCancel}>Cancel</button>;
};

const SaveButton: FC = () => {
	return <button type="submit">Save</button>;
};

export const FormActionButtons: FC = () => {
	return (
		<div className="edit-action-buttons">
			<CancelButton />
			<SaveButton />
		</div>
	);
};
