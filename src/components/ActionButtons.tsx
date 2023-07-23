type Props = {
	taskId: string;
};

const ActionButtons = ({ taskId }: Props) => {
	console.log('Task ID: ', taskId);
	return (
		<div>
			<button>Delete</button>
			<button>Edit</button>
		</div>
	);
};

export default ActionButtons;
