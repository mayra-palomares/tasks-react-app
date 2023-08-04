import { FC, useId } from 'react';
import styles from './Switch.module.css';

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
				className={styles['switch-checkbox']}
				id={switchId}
				type="checkbox"
			/>
			<label
				className={
					isOn
						? `${styles['switch-label']} ${styles['switch-on']}`
						: `${styles['switch-label']} ${styles['switch-off']}`
				}
				htmlFor={switchId}
			>
				<span className={styles['switch-button']} />
			</label>
		</>
	);
};
export default Switch;
