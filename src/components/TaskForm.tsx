function TaskForm() {
	return (
		<form className="form" autoComplete="off" autoCorrect="off">
			<div className="form-group">
				<label>Name</label>
				<input type="text" name="name" autoComplete="off" autoCorrect="off" />
			</div>
			<div className="form-group">
				<label>Description</label>
				<textarea
					name="description"
					autoComplete="off"
					autoCorrect="off"
					rows={4}
				/>
			</div>
			<div className="form-group">
				<label>Tags</label>
				<input type="text" name="tags" />
			</div>
		</form>
	);
}

export default TaskForm;
