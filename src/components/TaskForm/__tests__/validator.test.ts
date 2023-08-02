import { TaskRequest } from "../../../types/Task";
import { FormSchema, parseFormSchematoTask, parseTasktoFormSchema } from "../validator";

describe('Task form validator', () => {
    const sampleTask: TaskRequest = {
        title: 'Sample Task',
        description: 'This is a sample task.',
        tags: ['tag1', 'tag2'],
        completed: false,
    };

    const sampleFormSchema: FormSchema = {
        title: 'Sample Task',
        description: 'This is a sample task.',
        tags: [
            { label: 'tag1', value: 'tag1' },
            { label: 'tag2', value: 'tag2' },
        ],
    };

    it('should parse TaskRequest to FormSchema correctly', () => {
        const result = parseTasktoFormSchema(sampleTask);
        expect(result.title).toEqual(sampleFormSchema.title);
        expect(result.description).toEqual(sampleFormSchema.description);
        expect(result.tags).toEqual(sampleFormSchema.tags);
    });

    it('should parse FormSchema to TaskRequest correctly', () => {
        const result = parseFormSchematoTask(sampleFormSchema);
        expect(result.title).toEqual(sampleTask.title);
        expect(result.description).toEqual(sampleTask.description);
        expect(result.tags).toEqual(sampleTask.tags);
    });
})