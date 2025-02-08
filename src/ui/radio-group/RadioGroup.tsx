import { OptionType } from 'src/constants/articleProps';
import { Text } from 'src/ui/text';
import { Option } from './Option';
import styles from './RadioGroup.module.scss';

// Создаю тип RadioGroupProps, который описывает пропсы (свойства) компонента RadioGroup.
type RadioGroupProps = {
	name: string;
	options: OptionType[];
	selected: OptionType;
	onChange?: (value: OptionType) => void;
	title: string;
};

// Экспортирую компонент RadioGroup, который принимает пропсы типа RadioGroupProps.
export const RadioGroup = (props: RadioGroupProps) => {
	const { name, options, selected, onChange, title } = props; // Извлекаю свойства name, options, selected, onChange и title.

	// Создаю функцию handleChange, которая вызывает функцию onChange с переданной опцией.
	const handleChange = (option: OptionType) => onChange?.(option);

	// Возвращаю JSX-код, который представляет собой контейнер для радио-группы.
	return (
		<div className={styles.container}>
			{title && (
				<>
					<Text weight={800} size={12} uppercase>
						{title}
					</Text>
				</>
			)}
			<div className={styles.group}>
				{options.map((option) => (
					<Option
						key={option.value}
						groupName={name}
						value={option.value}
						title={option.title}
						selected={selected}
						onChange={() => handleChange(option)}
						option={option}
					/>
				))}
			</div>
		</div>
	);
};
