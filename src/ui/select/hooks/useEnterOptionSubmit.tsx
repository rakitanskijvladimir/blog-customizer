import { useEffect } from 'react';
import { OptionType } from 'src/constants/articleProps';

// оздаю тип UseEnterOptionSubmit, который описывает объект с тремя свойствами:
type UseEnterOptionSubmit = {
	onClick: (value: OptionType['value']) => void; // функция, которая вызывается при нажатии клавиши Enter. Принимает значение опции (value) в качестве аргумента.
	value: OptionType['value']; // значение опции (тип OptionType['value']).
	optionRef: React.RefObject<HTMLLIElement>; // ссылка на DOM-элемент (тип React.RefObject<HTMLLIElement>
};

// Экспортирую хук useEnterOptionSubmit, который принимает объект с тремя свойствами: onClick, value и optionRef.
export const useEnterOptionSubmit = ({
	onClick,
	value,
	optionRef,
}: UseEnterOptionSubmit) => {
	useEffect(() => {
		const option = optionRef.current;
		if (!option) return;
		// Создаю функция handleEnterKeyDown, которая будет вызываться при нажатии клавиши на клавиатуре.
		const handleEnterKeyDown = (event: KeyboardEvent) => {
			if (document.activeElement === option && event.key === 'Enter') {
				onClick(value);
			}
		};
		// Добавляю обработчик события keydown для элемента option. При нажатии клавиши будет вызываться функция handleEnterKeyDown.
		option.addEventListener('keydown', handleEnterKeyDown);
		return () => {
			option.removeEventListener('keydown', handleEnterKeyDown);
		};
	}, [value, onClick, optionRef]);
};
