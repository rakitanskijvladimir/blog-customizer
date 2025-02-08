import { useState, useRef, SyntheticEvent } from 'react';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { Spacing } from 'src/ui/spacing';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import { Select } from 'src/ui/select';
import { Text } from 'src/ui/text';
import { useClose } from 'components/hooks/useClose';

import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	OptionType,
	ArticleStateType,
	defaultArticleState,
} from 'src/constants/articleProps';

import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';

export type ArticleParamsFormProps = {
	// определяю тип TypeScript с именем ArticleParamsFormProps.
	onChange: React.Dispatch<React.SetStateAction<ArticleStateType>>; //  функция обновляет состояние, добавляя новое значение типа ArticleStateType.
};

// эта строка определяет функциональный компонент с именем ArticleParamsForm, который принимает свойства,
// определяемые ArticleParamsFormProps.
// Функция onChange извлекается из props.
export const ArticleParamsForm = ({ onChange }: ArticleParamsFormProps) => {
	// При использовании useRef: создаётся ссылка (defaultStateForm),
	// которая содержит состояние статьи по умолчанию, обозначаемое как ArticleStateType.
	const defaultStateForm = useRef<ArticleStateType>(defaultArticleState);
	//Дополнительная ссылка: ссылка (asideRef) создается для отслеживания div элемента, который будет представлять собой дополнительное меню.
	const asideRef = useRef<HTMLDivElement | null>(null);
	// отслеживаю открыто или закрыто меню
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	// отслеживаю состояние шрифтов
	const [fontFamily, setfontFamily] = useState<OptionType>(
		defaultStateForm.current.fontFamilyOption
	);
	// отслеживаю состояние размеров шрифтов
	const [fontSize, setfontSize] = useState<OptionType>(
		defaultStateForm.current.fontSizeOption
	);
	// отслеживаю состояние цвета фона
	const [backgroundColor, setBackgroundColor] = useState<OptionType>(
		defaultStateForm.current.backgroundColor
	);
	// отслеживаю состояние цвета шрифта
	const [fontColor, setFontColor] = useState<OptionType>(
		defaultStateForm.current.fontColor
	);
	// отслеживаю состояние шрины содеожимого на страницы
	const [contentWidth, setContentWidth] = useState<OptionType>(
		defaultStateForm.current.contentWidth
	);
	// использую хук useClose для открытия и закрытия меню
	useClose({
		isOpen: isMenuOpen,
		onClose: () => setIsMenuOpen(false),
		rootRef: asideRef,
	});
	// Функция переключения: открывает или закрывает меню в зависимости от предыдущего состояния.
	const toggleStateMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};
	// изменения шрифтов
	const changefontFamily = (option: OptionType) => {
		setfontFamily(option);
	};
	// изменения рамеров шрифтов
	const changeFontSize = (option: OptionType) => {
		setfontSize(option);
	};
	// ищменения цвета фона
	const changeBackgroundColor = (option: OptionType) => {
		setBackgroundColor(option);
	};
	// изменения цвета шрифта
	const changeFontColor = (option: OptionType) => {
		setFontColor(option);
	};
	// изменения ширины соержимого
	const changeContentWidth = (option: OptionType) => {
		setContentWidth(option);
	};
	// Обработчик отправки формы: функция обрабатывает отправку формы,
	//  предотвращает поведение по умолчанию и вызывает функцию onChange с текущими значениями состояния.
	const handleOnSubmitForm = (e: SyntheticEvent) => {
		e.preventDefault();
		onChange({
			fontFamilyOption: fontFamily,
			fontColor: fontColor,
			backgroundColor: backgroundColor,
			contentWidth: contentWidth,
			fontSizeOption: fontSize,
		});
	};

	// Функция сброса: эта функция возвращает параметры статьи в состояние по умолчанию
	// и обновляет локальные состояния в соответствии со значениями по умолчанию.
	const handleOnClickButtonReset = () => {
		onChange(defaultStateForm.current);

		setfontFamily(defaultStateForm.current.fontFamilyOption);
		setfontSize(defaultStateForm.current.fontSizeOption);
		setBackgroundColor(defaultStateForm.current.backgroundColor);
		setFontColor(defaultStateForm.current.fontColor);
		setContentWidth(defaultStateForm.current.contentWidth);
	};

	// возвращаю компонент JSX, содержит div со ссылкой на asideRef
	return (
		<div ref={asideRef}>
			<ArrowButton onClick={toggleStateMenu} isOpen={isMenuOpen} />
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isMenuOpen,
				})}>
				<form className={styles.form} onSubmit={handleOnSubmitForm}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Spacing size={50} />
					<Select
						options={fontFamilyOptions}
						selected={fontFamily}
						onChange={changefontFamily}
						title='шрифт'
					/>
					<Spacing size={50} />
					<RadioGroup
						name='font-size'
						options={fontSizeOptions}
						selected={fontSize}
						onChange={changeFontSize}
						title='размер шрифта'
					/>
					<Spacing size={50} />
					<Select
						options={fontColors}
						selected={fontColor}
						onChange={changeFontColor}
						title='цвет шрифта'
					/>
					<Spacing size={50} />
					<Separator />
					<Spacing size={50} />
					<Select
						options={backgroundColors}
						selected={backgroundColor}
						onChange={changeBackgroundColor}
						title='цвет фона'
					/>
					<Spacing size={50} />
					<Select
						options={contentWidthArr}
						selected={contentWidth}
						onChange={changeContentWidth}
						title='ширина контента'
					/>
					<Spacing size={207} />
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='reset'
							onClick={handleOnClickButtonReset}
						/>
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</div>
	);
};

// * кнопка со стрелкой: отображает компонент ArrowButton, который переключает состояние меню при нажатии.
// имя класса элемента «aside» будет меняться в зависимости от того, открыто или закрыто меню (с помощью утилиты clsx).
// далее идут отображения шрифтов, цветов, размеров и т.д. (заполнение всех полей)
