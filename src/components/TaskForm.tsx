import { FormActionButtons } from './common/ActionButtons';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import CreatableSelect from 'react-select/creatable';
import { TaskRequest } from '../types/Task';
import { z } from 'zod';

const formSchema = z.object({
	title: z.string().min(1, 'Title is required').max(50),
	description: z.string().min(1, 'Description is required').max(400),
	tags: z
		.array(z.object({ label: z.string(), value: z.string() }))
		.min(1, 'Tags are required'),
});

type FormData = z.infer<typeof formSchema>;

const parseTasktoFormData = (task: TaskRequest): FormData => {
	const parsedTags = task.tags.map((tag) => ({ label: tag, value: tag }));
	return {
		...task,
		tags: parsedTags,
	};
};

const parseFormDatatoTask = (data: FormData): TaskRequest => {
	const parsedTags = data.tags.map((tag) => tag.label);
	const parsedTask = {
		...data,
		tags: parsedTags,
		completed: false,
	};
	return parsedTask;
};

const initialTask = { title: '', description: '', tags: [], completed: false };

type TaskFormProps = {
	task?: TaskRequest;
	handleSave: (data: TaskRequest) => void;
};

function TaskForm({ task = initialTask, handleSave }: TaskFormProps) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm<FormData>({
		defaultValues: parseTasktoFormData(task),
		resolver: zodResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormData> = (data) => {
		const parsedData = parseFormDatatoTask(data);
		handleSave(parsedData);
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
				{errors.title && <span className="error">{errors.title?.message}</span>}
			</div>
			<div className="form-group">
				<label>Description</label>
				<textarea
					{...register('description')}
					autoComplete="off"
					autoCorrect="off"
					rows={4}
				/>
				{errors.description && (
					<span className="error">{errors.description?.message}</span>
				)}
			</div>
			<div className="form-group">
				<label>Tags</label>
				<Controller
					name="tags"
					control={control}
					render={({ field }) => (
						<CreatableSelect {...field} isMulti isClearable />
					)}
				/>
				{errors.tags && <span className="error">{errors.tags?.message}</span>}
			</div>
			<FormActionButtons />
		</form>
	);
}

export default TaskForm;
