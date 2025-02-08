import { useRef } from 'react';
import { OptionType } from 'src/constants/articleProps';
import { Text } from 'src/ui/text';
import { useEnterSubmit } from './hooks/useEnterSubmit';
import styles from './RadioGroup.module.scss';

// Создаю тип OptionProps, который описывает пропсы (свойства) компонента Option.
type OptionProps = {
	value: OptionType['value'];
	title: OptionType['title'];
	selected: OptionType;
	groupName: string;
	onChange?: (option: OptionType) => void;
	option: OptionType;
};

// Экспортирую компонент Option, который принимает пропсы типа OptionProps
export const Option = (props: OptionProps) => {
	const { value, title, selected, groupName, onChange, option } = props; // деструктуризирую пропсы для удобного использования

	const optionRef = useRef<HTMLDivElement>(null); // ссылка optionRef с помощью хука useRef для доступа к DOM-элементу.

	const handleChange = () => onChange?.(option); // Создаю функция handleChange, которая вызывает функцию onChange с текущей опцией (option).

	useEnterSubmit({ onChange, option }); // Использую хук useEnterSubmit, который позволяет обрабатывать нажатие клавиши Enter на элементе.

	// Создаю уникальный идентификатор inputId для элемента <input>
	// Идентификатор формирует groupName и value, чтобы быть уникальным в пределах группы.
	const inputId = `${groupName}_radio_item_with_value__${value}`;
	// Определяется, выбрана ли текущая опция, путем сравнения value с selected.title
	//  Переменная isChecked будет true, если опция выбрана, и false в противном случае.
	const isChecked = value === selected.title;

	// Возвращаю JSX-код, который представляет собой контейнер для опции.
	return (
		<div
			className={styles.item}
			key={value}
			data-checked={isChecked}
			data-testid={inputId}
			tabIndex={0}
			ref={optionRef}>
			<input
				className={styles.input}
				type='radio'
				name={groupName}
				id={inputId}
				value={value}
				onChange={handleChange}
				tabIndex={-1}
			/>
			<label className={styles.label} htmlFor={inputId}>
				<Text size={18} uppercase>
					{title}
				</Text>
			</label>
		</div>
	);
};
