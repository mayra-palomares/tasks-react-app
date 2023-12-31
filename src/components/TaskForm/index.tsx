import FormActionButtons from './FormActionButtons';
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
import Switch from '../common/Switch';
import styles from './TaskForm.module.css';

const initialTask = { title: '', description: '', tags: [], completed: false };

type TaskFormProps = {
	task?: TaskRequest;
	handleSave: (data: TaskRequest) => void;
	editMode?: boolean;
};

const TaskForm: FC<TaskFormProps> = ({
	task = initialTask,
	handleSave,
	editMode = false,
}) => {
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
			className={styles['form']}
			autoComplete="off"
			autoCorrect="off"
		>
			<div className={styles['form-group']}>
				<label>Name</label>
				<input
					{...register('title')}
					type="text"
					autoComplete="off"
					autoCorrect="off"
				/>
				{errors.title && (
					<span className={styles['error']}>{errors.title?.message}</span>
				)}
			</div>
			<div className={styles['form-group']}>
				<label>Description</label>
				<textarea
					{...register('description')}
					autoComplete="off"
					autoCorrect="off"
					rows={4}
				/>
				{errors.description && (
					<span className={styles['error']}>{errors.description?.message}</span>
				)}
			</div>
			<div className={styles['form-group']}>
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
				{errors.tags && (
					<span className={styles['error']}>{errors.tags?.message}</span>
				)}
			</div>
			{editMode ? (
				<div className={styles['form-group-switch']}>
					<label>Completed</label>
					<Controller
						name="completed"
						control={control}
						render={({ field }) => {
							return (
								<Switch
									{...field}
									isOn={field.value}
									handleToggle={field.onChange}
								/>
							);
						}}
					/>
				</div>
			) : null}
			<FormActionButtons />
		</form>
	);
};

export default TaskForm;
