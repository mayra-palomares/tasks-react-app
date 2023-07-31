import { useForm, SubmitHandler } from 'react-hook-form';
import { FormActionButtons } from './common/ActionButtons';
import { TaskRequest } from '../types/Task';
interface FormInput {
	title: string;
	description: string;
	tags: string[];
}

const initialTask = { title: '', description: '', tags: [], completed: false };

type TaskFormProps = {
	task?: TaskRequest;
	handleSave: (data: TaskRequest) => void;
};

function TaskForm({ task = initialTask }: TaskFormProps) {
	const { register, handleSubmit } = useForm<FormInput>({
		defaultValues: task,
	});

	const onSubmit: SubmitHandler<FormInput> = (data) => {
		console.log(data);
		//handleSave(data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="form"
			autoComplete="off"
			autoCorrect="off"
		>
			<div className="form-group">
				<label>Name</label>
				<input
					{...register('title')}
					type="text"
					autoComplete="off"
					autoCorrect="off"
				/>
			</div>
			<div className="form-group">
				<label>Description</label>
				<textarea
					{...register('description')}
					autoComplete="off"
					autoCorrect="off"
					rows={4}
				/>
			</div>
			<div className="form-group">
				<label>Tags</label>
				<input
					{...register('tags')}
					type="text"
					autoComplete="off"
					autoCorrect="off"
				/>
			</div>
			<FormActionButtons />
		</form>
	);
}

export default TaskForm;
