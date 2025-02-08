import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup } from './RadioGroup';
import { useState } from 'react';

// объявляю константу с именем MetaMeta Declaration:RadioGroup компонент.
const meta: Meta<typeof RadioGroup> = {
	component: RadioGroup,
};
// определяет псевдоним типа StoryObj Определение типа истории:RadioGroup компонент.
export default meta;
type Story = StoryObj<typeof RadioGroup>;

// создаю переменную в виде стрелочной функции и передаю в нее массив с данными
const RadioGroupWithState = () => {
	const options = [
		{ title: '1 опция', value: '1 опция', className: '' },
		{ title: '2 опция', value: '2 опция', className: '' },
		{ title: '3 опция', value: '3 опция', className: '' },
		{ title: '4 опция', value: '4 опция', className: '' },
	];
	const [selected, setSelected] = useState(options[0]); // создаю переменную и функцию для обновления состояния selected

	// возвращаю отображение на главную страницу с массивом объектов
	return (
		<>
			<RadioGroup
				selected={selected}
				name='radio'
				onChange={setSelected}
				options={options}
				title='Название радиогруппы'
			/>
		</>
	);
};

export const RadioGroupStory: Story = {
	// RadioGroupStory присваиваю объект, соответствующий типу Story
	render: () => <RadioGroupWithState />, // отображаю компонент
};
