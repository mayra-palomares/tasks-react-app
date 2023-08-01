import { z } from 'zod';
import { TaskRequest } from '../../types/Task';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
    title: z.string().min(1, 'Title is required').max(50),
    description: z.string().min(1, 'Description is required').max(400),
    tags: z
        .array(z.object({ label: z.string(), value: z.string() }))
        .min(1, 'Tags are required'),
});

export type FormSchema = z.infer<typeof formSchema>;

export const formResolver = zodResolver(formSchema)

export const parseTasktoFormData = (task: TaskRequest): FormSchema => {
    const parsedTags = task.tags.map((tag) => ({ label: tag, value: tag }));
    return {
        ...task,
        tags: parsedTags,
    };
};

export const parseFormDatatoTask = (data: FormSchema): TaskRequest => {
    const parsedTags = data.tags.map((tag) => tag.label);
    const parsedTask = {
        ...data,
        tags: parsedTags,
        completed: false,
    };
    return parsedTask;
};