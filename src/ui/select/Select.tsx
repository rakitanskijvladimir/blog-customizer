import { useState, useRef } from 'react';
import type { MouseEventHandler } from 'react';
import clsx from 'clsx';
import { OptionType } from 'src/constants/articleProps';
import { Text } from '../text';
import arrowDown from 'src/images/arrow-down.svg';
import { Option } from './Option';
import { isFontFamilyClass } from './helpers/isFontFamilyClass';
import { useEnterSubmit } from './hooks/useEnterSubmit';
import { useOutsideClickClose } from './hooks/useOutsideClickClose';
import styles from './Select.module.scss';

// Создаею тип SelectProps, который описывает пропсы (свойства) компонента Select.
type SelectProps = {
	selected: OptionType | null;
	options: OptionType[];
	placeholder?: string;
	onChange?: (selected: OptionType) => void;
	onClose?: () => void;
	title?: string;
};

// Экспортирую компонент Select, который принимает пропсы типа SelectProps
export const Select = (props: SelectProps) => {
	const { options, placeholder, selected, onChange, onClose, title } = props; // Деструктуризирую пропсы для удобного использования внутри компонента.
	const [isOpen, setIsOpen] = useState<boolean>(false); // создаю состояние isOpen с помощью хука useState. Оно управляет видимостью выпадающего списка.
	const rootRef = useRef<HTMLDivElement>(null); // создаю с помощью хука доступ и управление с дом элементом
	const placeholderRef = useRef<HTMLDivElement>(null); // ссылка на элемент заполнитель (инпут)

	// Использую хук useOutsideClickClose, который закрывает выпадающий список при клике вне компонента,
	// принимает объект с isOpen, rootRef, onClose и onChange функцию setIsOpen
	useOutsideClickClose({
		isOpen,
		rootRef,
		onClose,
		onChange: setIsOpen,
	});

	// Использую хук useEnterSubmit, который открывает/закрывает выпадающий список при нажатии клавиши Enter на элементе-заполнителе
	// принимает объект с placeholderRef и onChange функцию setIsOpen
	useEnterSubmit({
		placeholderRef,
		onChange: setIsOpen,
	});

	// Создается функция handleOptionClick, которая вызывается при выборе опции, закрываю выпадающий список (setIsOpen(false)).
	// Вызываю функцию onChange с выбранной опцией (option), если она передана.
	const handleOptionClick = (option: OptionType) => {
		setIsOpen(false);
		onChange?.(option);
	};
	// тоже самое с элементом заполнителем
	const handlePlaceHolderClick: MouseEventHandler<HTMLDivElement> = () => {
		setIsOpen((isOpen) => !isOpen);
	};

	// Возвращаю JSX-код, который представляет собой контейнер для заполнения
	return (
		<div className={styles.container}>
			{title && (
				<>
					<Text size={12} weight={800} uppercase>
						{title}
					</Text>
				</>
			)}
			<div
				className={styles.selectWrapper}
				ref={rootRef}
				data-is-active={isOpen}
				data-testid='selectWrapper'>
				<img
					src={arrowDown}
					alt='иконка стрелочки'
					className={clsx(styles.arrow, { [styles.arrow_open]: isOpen })}
				/>
				<div
					className={clsx(
						styles.placeholder,
						styles[selected?.optionClassName || '']
					)}
					data-status={status}
					data-selected={!!selected?.value}
					onClick={handlePlaceHolderClick}
					role='button'
					tabIndex={0}
					ref={placeholderRef}>
					<Text
						family={
							isFontFamilyClass(selected?.className)
								? selected?.className
								: undefined
						}>
						{selected?.title || placeholder}
					</Text>
				</div>
				{isOpen && (
					<ul className={styles.select} data-testid='selectDropdown'>
						{options
							.filter((option) => selected?.value !== option.value)
							.map((option) => (
								<Option
									key={option.value}
									option={option}
									onClick={() => handleOptionClick(option)}
								/>
							))}
					</ul>
				)}
			</div>
		</div>
	);
};
