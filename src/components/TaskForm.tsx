import { useState } from 'react';
import { FormActionButtons } from './common/ActionButtons';
import { TaskRequest } from '../types/Task';

type Props = {
	task?: TaskRequest;
	handleSave: (data: TaskRequest) => void;
};

const initialTask = { title: '', description: '', tags: [], completed: false };

function TaskForm({ task = initialTask, handleSave }: Props) {
	const [data, setData] = useState<TaskRequest>(task);
	const { title = '', description = '', tags = [] } = data;

	const onClickSave = async () => {
		handleSave(data);
	};

	const handleChange = (event: any) => {
		const { name, value } = event.target;
		setData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	return (
		<>
			<form className="form" autoComplete="off" autoCorrect="off">
				<div className="form-group">
					<label>Name</label>
					<input
						value={title}
						onChange={handleChange}
						type="text"
						name="title"
						autoComplete="off"
						autoCorrect="off"
					/>
				</div>
				<div className="form-group">
					<label>Description</label>
					<textarea
						value={description}
						onChange={handleChange}
						name="description"
						autoComplete="off"
						autoCorrect="off"
						rows={4}
					/>
				</div>
				<div className="form-group">
					<label>Tags</label>
					<input
						value={tags?.join(',')}
						onChange={() => {}}
						type="text"
						name="tags"
					/>
				</div>
			</form>
			<FormActionButtons handleSave={onClickSave} />
		</>
	);
}

export default TaskForm;
