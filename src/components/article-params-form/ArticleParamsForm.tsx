import { useState, useRef, FormEvent } from 'react';
import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
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
import styles from './ArticleParamsForm.module.scss';

export type ArticleParamsFormProps = {
	onChange: React.Dispatch<React.SetStateAction<ArticleStateType>>;
};

export const ArticleParamsForm = ({ onChange }: ArticleParamsFormProps) => {
	const defaultStateForm: ArticleStateType = defaultArticleState;
	const asideRef = useRef<HTMLDivElement | null>(null);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [fontFamily, setFontFamily] = useState<OptionType>(
		defaultStateForm.fontFamilyOption
	);
	const [fontSize, setFontSize] = useState<OptionType>(
		defaultStateForm.fontSizeOption
	);
	const [backgroundColor, setBackgroundColor] = useState<OptionType>(
		defaultStateForm.backgroundColor
	);
	const [fontColor, setFontColor] = useState<OptionType>(
		defaultStateForm.fontColor
	);
	const [contentWidth, setContentWidth] = useState<OptionType>(
		defaultStateForm.contentWidth
	);

	useClose({
		isOpen: isMenuOpen,
		onClose: () => setIsMenuOpen(false),
		rootRef: asideRef,
	});

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onChange({
			fontFamilyOption: fontFamily,
			fontColor: fontColor,
			backgroundColor: backgroundColor,
			contentWidth: contentWidth,
			fontSizeOption: fontSize,
		});
	};

	const handleReset = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onChange(defaultStateForm);
		setFontFamily(defaultStateForm.fontFamilyOption);
		setFontSize(defaultStateForm.fontSizeOption);
		setBackgroundColor(defaultStateForm.backgroundColor);
		setFontColor(defaultStateForm.fontColor);
		setContentWidth(defaultStateForm.contentWidth);
	};

	return (
		<div ref={asideRef}>
			<ArrowButton
				onClick={() => setIsMenuOpen((prev) => !prev)}
				isOpen={isMenuOpen}
			/>
			<aside
				className={`${styles.container} ${
					isMenuOpen ? styles.container_open : ''
				}`}>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
					onReset={handleReset}>
					<Text as='h2' size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						options={fontFamilyOptions}
						selected={fontFamily}
						onChange={setFontFamily}
						title='шрифт'
					/>
					<RadioGroup
						name='font-size'
						options={fontSizeOptions}
						selected={fontSize}
						onChange={setFontSize}
						title='размер шрифта'
					/>
					<Select
						options={fontColors}
						selected={fontColor}
						onChange={setFontColor}
						title='цвет шрифта'
					/>
					<Separator />
					<Select
						options={backgroundColors}
						selected={backgroundColor}
						onChange={setBackgroundColor}
						title='цвет фона'
					/>
					<Select
						options={contentWidthArr}
						selected={contentWidth}
						onChange={setContentWidth}
						title='ширина контента'
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</div>
	);
};
