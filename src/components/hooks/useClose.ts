import { useEffect } from 'react';

// Тип TUseClose описывает объект 3мя свойствами
type TUseClose = {
	isOpen: boolean; // бул значение, открыт ли элемент
	onClose: () => void; // функция кот будет вызвана для закрытия элемента
	rootRef: React.RefObject<HTMLElement>; // ссылка на дом, корневой элемент
};

// экспортирую функ useClose которая принимает объект с 3мя свойствами
export function useClose({ isOpen, onClose, rootRef }: TUseClose) {
	useEffect(() => {
		// хук useEffect для изменения состояния компонента
		if (!isOpen) return; //Если isOpen равно false, то выходим из функции, так как нет необходимости добавлять обработчики событий, если элемент закрыт.

		// функ handleClickOutside будет вызываться при клике вне корневого элемента
		function handleClickOutside(event: MouseEvent) {
			const { target } = event; //Извлекаю свойство target из события event, которое представляет собой элемент, на котором произошел клик.
			const isOutsideClick =
				target instanceof Node && // проверяю, что target является DOM-элементом.
				rootRef.current && // проверяю, что rootRef.current существует.
				!rootRef.current.contains(target); // проверяю, что target не содержится внутри
			if (isOutsideClick) {
				//Если клик был вне корневого элемента, вызываю функцию onClose, чтобы закрыть элемент.
				onClose();
			}
		}

		// функция handleEscape будет вызываться при нажатии клавиши на клавиатуре.
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				//Если нажата клавиша Escape, вызываю функцию onClose, чтобы закрыть элемент.
				onClose();
			}
		};

		// Добавляю обработчики событий keydown: для отслеживания нажатия клавиш mousedown: для отслеживания кликов вне корневого элемента.
		document.addEventListener('keydown', handleEscape);
		document.addEventListener('mousedown', handleClickOutside);

		// Возвращаем функцию очистки, которая удаляет обработчики событий при удалении компонента
		return () => {
			document.removeEventListener('keydown', handleEscape);
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [isOpen, onClose, rootRef]); // зависимость для useEffect: хук будет повторно выполняться при изменении isOpen, onClose или rootRef.
}
