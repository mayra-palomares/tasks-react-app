import { useState } from 'react';
import { Task } from '../types/Task';

type Props = {
	task: Task;
};

function TaskForm({ task }: Props) {
	const [data, setData] = useState<Task>(task);
	const { title = '', description = '', tags = [] } = data;

	const handleChange = (event: any) => {
		const { name, value } = event.target;
		console.log('Handle change: ', name, value);
		setData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	return (
		<form className="form" autoComplete="off" autoCorrect="off">
			<div className="form-group">
				<label>Name</label>
				<input
					value={title}
					onChange={handleChange}
					type="text"
					name="name"
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
				<input value={tags?.join(',')} type="text" name="tags" />
			</div>
		</form>
	);
}

export default TaskForm;
