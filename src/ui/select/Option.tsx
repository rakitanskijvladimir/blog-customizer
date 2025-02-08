import { useRef } from 'react';
import type { MouseEventHandler } from 'react';
import clsx from 'clsx';
import { OptionType } from 'src/constants/articleProps';
import { Text } from 'src/ui/text';
import { isFontFamilyClass } from './helpers/isFontFamilyClass';
import { useEnterOptionSubmit } from './hooks/useEnterOptionSubmit';
import styles from './Select.module.scss';

// Создаю тип OptionProps, который описывает пропсы (свойства) компонента Option.
type OptionProps = {
	option: OptionType;
	onClick: (value: OptionType['value']) => void;
};

// Экспортирую компонент Option, который принимает пропсы типа OptionProps.
export const Option = (props: OptionProps) => {
	const {
		option: { value, title, optionClassName, className }, // Деструктурирую пропсы для удобного использования внутри компонента.
		onClick,
	} = props;
	const optionRef = useRef<HTMLLIElement>(null); //создаю переменную для использования хука и работы с дом элем

	// Создаю функция handleClick, которая возвращает другую функцию (обработчик клика).
	// Принимает clickedValue (значение опции) и возвращает функцию, которая вызывает onClick с этим значением.
	// Тип возвращаемой функции — MouseEventHandler<HTMLLIElement>, что указывает на обработчик событий мыши для элемента <li>.
	const handleClick =
		(clickedValue: OptionType['value']): MouseEventHandler<HTMLLIElement> =>
		() => {
			onClick(clickedValue);
		};

	useEnterOptionSubmit({
		optionRef,
		value,
		onClick,
	});

	// Возвращаю JSX-код, который представляет собой элемент списка <li>.
	return (
		<li
			className={clsx(styles.option, styles[optionClassName || ''])}
			value={value}
			onClick={handleClick(value)}
			tabIndex={0}
			data-testid={`select-option-${value}`}
			ref={optionRef}>
			<Text family={isFontFamilyClass(className) ? className : undefined}>
				{title}
			</Text>
		</li>
	);
};
