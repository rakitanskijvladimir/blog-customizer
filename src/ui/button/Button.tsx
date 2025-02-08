import { Text } from '../text';
import styles from './Button.module.scss';

// экспортирую кнопку с массивом объектов
export const Button = ({
	title,
	onClick,
	type,
}: {
	title: string;
	onClick?: () => void;
	type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
}) => {
	// возвращаю jsx формат с объектом и стилями
	return (
		<button className={styles.button} type={type} onClick={onClick}>
			<Text weight={800} uppercase>
				{title}
			</Text>
		</button>
	);
};
