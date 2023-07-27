import { useState } from 'react';
import { EditActionButtons } from '../components/ActionButtons';
import { Task } from '../types/Task';

type Props = {
	task: Task;
};

function TaskForm({ task }: Props) {
	const [data, setData] = useState<Task>(task);
	const { title = '', description = '', tags = [] } = data;

	const handleSave = () => {
		alert('Task was updated');
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
			<EditActionButtons handleSave={handleSave} />
		</>
	);
}

export default TaskForm;
