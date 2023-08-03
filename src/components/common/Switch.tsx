import { FC, useId } from 'react';

type SwitchProps = {
	isOn: boolean;
	handleToggle: () => void;
};

const Switch: FC<SwitchProps> = ({ isOn, handleToggle }) => {
	const switchId = useId();
	return (
		<>
			<input
				checked={isOn}
				onChange={handleToggle}
				className="switch-checkbox"
				id={switchId}
				type="checkbox"
			/>
			<label
				className={isOn ? 'switch-label switch-on' : 'switch-label switch-off'}
				htmlFor={switchId}
			>
				<span className="switch-button" />
			</label>
		</>
	);
};
export default Switch;
