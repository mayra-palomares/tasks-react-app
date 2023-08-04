import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TaskForm.module.css';

export const CancelButton: FC = () => {
	const navigate = useNavigate();

	const handleCancel = () => navigate('/');
	return <button onClick={handleCancel}>Cancel</button>;
};

export const SaveButton: FC = () => {
	return <button type="submit">Save</button>;
};

const FormActionButtons: FC = () => {
	return (
		<div className={styles['form-action-buttons']}>
			<CancelButton />
			<SaveButton />
		</div>
	);
};

export default FormActionButtons;
