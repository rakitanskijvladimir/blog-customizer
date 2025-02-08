import { useEffect, useRef } from 'react';
import { OptionType } from 'src/constants/articleProps';

// Создаею тип UseEnterSubmit, который описывает объект с двумя свойствами:
type UseEnterSubmit = {
	onChange?: (option: OptionType) => void;
	option: OptionType;
};

// Экспортируб хук useEnterSubmit, который принимает объект с двумя свойствами: onChange и option.
export const useEnterSubmit = ({ onChange, option }: UseEnterSubmit) => {
	// Создаею ссылку optionRef с помощью хука useRef для доступа к DOM-элементу.
	const optionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// использую хук useEffect
		const optionHtml = optionRef.current; // Получаю текущее значение ссылки optionRef и сохраняю в переменную optionHtml.
		if (!optionHtml) return;

		// Создаю функцию handleEnterKeyDown, которая будет вызываться при нажатии клавиши на клавиатуре.
		const handleEnterKeyDown = (event: KeyboardEvent) => {
			if (document.activeElement === optionHtml && event.key === 'Enter') {
				onChange?.(option);
			}
		};

		// Добавляю обработчик события keydown для элемента optionHtml. При нажатии клавиши будет вызываться функция handleEnterKeyDown.
		optionHtml.addEventListener('keydown', handleEnterKeyDown);

		// не забываем удалять листенеры, при размонтировании компонента
		return () => {
			optionHtml.removeEventListener('keydown', handleEnterKeyDown);
		};
	}, [onChange, option]); //Указываю зависимости для хука useEffect: onChange и option. Хук выполняется повторно при изменении onChange или option.
};
