jest.mock('./../TaskForm.module.css', () => ({}));

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
	useNavigate: () => mockNavigate,
}));

import { render, fireEvent } from '@testing-library/react';
import FormActionButtons, {
	SaveButton,
	CancelButton,
} from './../FormActionButtons';
import '@testing-library/jest-dom/extend-expect';

describe('FormActionButtons', () => {
	it('should render CancelButton and SaveButton', () => {
		const { getByText } = render(<FormActionButtons />);
		const cancelButton = getByText('Cancel');
		const saveButton = getByText('Save');

		expect(cancelButton).toBeInTheDocument();
		expect(saveButton).toBeInTheDocument();
	});
});

describe('SaveButton', () => {
	it('should render a button with type "submit"', () => {
		const { getByText } = render(<SaveButton />);
		const saveButton = getByText('Save');

		expect(saveButton.tagName).toBe('BUTTON');
		expect(saveButton).toHaveAttribute('type', 'submit');
	});
});

describe('CancelButton', () => {
	it('should call the navigate function with "/" when clicked', () => {
		const { getByText } = render(<CancelButton />);
		const cancelButton = getByText('Cancel');
		fireEvent.click(cancelButton);

		expect(mockNavigate).toHaveBeenCalledWith('/');
	});
});
