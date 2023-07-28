export type Task = {
	_id: string;
	title: string;
	description: string;
	completed: boolean;
	tags: string[];
};

export type TaskRequest = Pick<Task, "title" | "description" | "completed" | "tags">;