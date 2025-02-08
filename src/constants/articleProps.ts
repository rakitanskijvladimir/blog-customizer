export const fontFamilyClasses = [
	// создаю масств для использования классов шрифтов
	'open-sans',
	'ubuntu',
	'cormorant-garamond',
	'days-one',
	'merriweather',
] as const;

// Создаю тип FontFamiliesClasses, который представляет собой объединение всех элементов массива fontFamilyClasses.
//  Тип будет равен 'open-sans' | 'ubuntu' | 'cormorant-garamond' | 'days-one' | 'merriweather'.
export type FontFamiliesClasses = (typeof fontFamilyClasses)[number];

// тип описывет массив с 4мя строками объекта
export type OptionType = {
	title: string;
	value: string;
	className: string;
	optionClassName?: string;
};
// каждый элемент массива может иметь дополнительное свойство optionClassName, которое должно быть одним из значений типа FontFamiliesClasses.
export const fontFamilyOptions: OptionType[] & {
	optionClassName?: FontFamiliesClasses;
} = [
	{ title: 'Open Sans', value: 'Open Sans', className: fontFamilyClasses[0] },
	{ title: 'Ubuntu', value: 'Ubuntu', className: fontFamilyClasses[1] },
	{
		title: 'Cormorant Garamond',
		value: 'Cormorant Garamond',
		className: fontFamilyClasses[2],
	},
	{ title: 'Days One', value: 'Days One', className: fontFamilyClasses[3] },
	{
		title: 'Merriweather',
		value: 'Merriweather',
		className: fontFamilyClasses[4],
	},
];
// экспортирую массивы объектов с размины значениями для отображения на странице
export const fontColors: OptionType[] = [
	{
		title: 'Черный',
		value: '#000000',
		className: 'font-black',
		optionClassName: 'option-black',
	},
	{
		title: 'Белый',
		value: '#FFFFFF',
		className: 'font-white',
		optionClassName: 'option-white',
	},
	{
		title: 'Серый',
		value: '#C4C4C4',
		className: 'font-gray',
		optionClassName: 'option-gray',
	},
	{
		title: 'Розовый',
		value: '#FEAFE8',
		className: 'font-pink',
		optionClassName: 'option-pink',
	},
	{
		title: 'Ярко-розовый',
		value: '#FD24AF',
		className: 'font-fuchsia',
		optionClassName: 'option-fuchsia',
	},
	{
		title: 'Жёлтый',
		value: '#FFC802',
		className: 'font-yellow',
		optionClassName: 'option-yellow',
	},
	{
		title: 'Зелёный',
		value: '#80D994',
		className: 'font-green',
		optionClassName: 'option-green',
	},
	{
		title: 'Голубой',
		value: '#6FC1FD',
		className: 'font-blue',
		optionClassName: 'option-blue',
	},
	{
		title: 'Фиолетовый',
		value: '#5F0DEE',
		className: 'font-purple',
		optionClassName: 'option-purple',
	},
];

export const backgroundColors: OptionType[] = [
	{
		title: 'Белый',
		value: '#FFFFFF',
		className: 'bg-white',
		optionClassName: 'option-white',
	},
	{
		title: 'Черный',
		value: '#000000',
		className: 'bg-black',
		optionClassName: 'option-black',
	},
	{
		title: 'Серый',
		value: '#C4C4C4',
		className: 'bg-gray',
		optionClassName: 'option-gray',
	},
	{
		title: 'Розовый',
		value: '#FEAFE8',
		className: 'bg-pink',
		optionClassName: 'option-pink',
	},
	{
		title: 'Ярко-розовый',
		value: '#FD24AF',
		className: 'bg-fuchsia',
		optionClassName: 'option-fuchsia',
	},
	{
		title: 'Жёлтый',
		value: '#FFC802',
		className: 'bg-yellow',
		optionClassName: 'option-yellow',
	},
	{
		title: 'Зелёный',
		value: '#80D994',
		className: 'bg-green',
		optionClassName: 'option-green',
	},
	{
		title: 'Голубой',
		value: '#6FC1FD',
		className: 'bg-blue',
		optionClassName: 'option-blue',
	},
	{
		title: 'Фиолетовый',
		value: '#5F0DEE',
		className: 'bg-purple',
		optionClassName: 'option-purple',
	},
];

export const contentWidthArr: OptionType[] = [
	{
		title: 'Широкий',
		value: '1394px',
		className: 'width-wide',
		optionClassName: 'option-wide',
	},
	{
		title: 'Узкий',
		value: '948px',
		className: 'width-narrow',
		optionClassName: 'option-narrow',
	},
];

export const fontSizeOptions: OptionType[] = [
	{ title: '18px', value: '18px', className: 'font-size-18' },
	{ title: '25px', value: '25px', className: 'font-size-25' },
	{ title: '38px', value: '38px', className: 'font-size-38' },
];

// Каждое свойство объекта инициализируется первым элементом соответствующего массива:
export const defaultArticleState = {
	fontFamilyOption: fontFamilyOptions[0], // первый шрифт из fontFamilyOptions
	fontColor: fontColors[0], // первый цвет текста из fontColors.
	backgroundColor: backgroundColors[0], // первый цвет фона из backgroundColors.
	contentWidth: contentWidthArr[0], // первая ширина контента из contentWidthArr.
	fontSizeOption: fontSizeOptions[0], // первый размер шрифта из fontSizeOptions.
};

export type ArticleStateType = typeof defaultArticleState;
