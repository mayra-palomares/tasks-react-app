import { FormActionButtons } from './ActionButtons';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import CreatableSelect from 'react-select/creatable';
import { TaskRequest } from '../../types/Task';
import { FC } from 'react';
import {
	FormSchema,
	formResolver,
	parseFormSchematoTask,
	parseTasktoFormSchema,
} from './validator';

const initialTask = { title: '', description: '', tags: [], completed: false };

type TaskFormProps = {
	task?: TaskRequest;
	handleSave: (data: TaskRequest) => void;
};

const TaskForm: FC<TaskFormProps> = ({ task = initialTask, handleSave }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm<FormSchema>({
		defaultValues: parseTasktoFormSchema(task),
		resolver: formResolver,
	});

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		const parsedData = parseFormSchematoTask(data);
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
						<CreatableSelect
							{...field}
							isMulti
							isClearable
							placeholder="Create new tags..."
						/>
					)}
				/>
				{errors.tags && <span className="error">{errors.tags?.message}</span>}
			</div>
			<FormActionButtons />
		</form>
	);
};

export default TaskForm;
